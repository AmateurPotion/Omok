import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Omok } from "../game";
import LioWebRTC from 'liowebrtc';
import './Gameboard.css';

const textureMap = {
    "none": "img/stone-none.png",
    "black": "img/stone-black.png"
};

function Board({board, place = (e, x, y) => { alert(x + " / " + y); }}){
        if(board != null && typeof board.board == typeof Function) {
            return (
                <div className="board">
                    {board.board().map((array, y) => (<div className="line" key={y}>
                        {array.map((val, x) => (
                            <img 
                                onClick={(e) => place(e, x, y)} alt="cell" key={y * array.length + x} 
                                src={textureMap[val]} width="3%"
                            />
                        ))}
                        <br/>
                    </div>))}
                </div>
            );
        } else {
            return (<div>loading...</div>)
        }
    };

const Gameboard = () => {
    const history = useHistory();

    const [state, changeState] = useState(JSON.parse(sessionStorage.getItem("game")));
    const [lio, rtcConfigure] = useState({
        
    });

    useEffect(() => {
        // mount
        // page load
        document.querySelector("title").innerHTML = "Omok";
        
        // Game loading
        if(state != null) {
            if(state.state === "start") {
                changeState({...state, state: "progress", status: new Omok(state.boardWidth, state.boardHeight)});
                console.log(state);
            }
        } else {
            alert("올바르지 않은 접근으로 인해 첫 화면으로 이동됩니다.");
            history.push("/");
        }

        return () => {
            // unmount
            if(state != null) {
                sessionStorage.setItem("game", JSON.stringify(state));
            }
        }
    } , [state, changeState, history]);
    
    // Sync
    
    if(state != null) {
        if(state.status == null) {
            changeState({...state, status: new Omok(state.boardWidth, state.boardHeight)})
        } else if(typeof state.status != typeof Omok) {
            if(!state.status.hasOwnProperty("board")) {
                let data = Omok.loadData(state.status);
                changeState({...state, status: data})
            }
        }
    }
    
    // events
    
    const placeEvent = (e, x, y) => {
        if(state.status.getColor(x, y) === "none") {
            changeState({...state, run: state.status.place(x, y, "black")});
            changeState({...state, run: null});
        }
    };
    
    // webrtc(module - liowebrtc) events
    
    const joinHandler = (e) => {
        
    };



    return (
        <div className="gameboard">
            {(() => state != null ? <Board board={state.status} place={placeEvent}/> : null)()}
        </div>
    );
}

export default Gameboard;