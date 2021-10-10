import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Omok } from "../game";
import LioWebRTC from 'liowebrtc';
import './Gameboard.css';

//const publish = false; (publish ? "./" : "") + 

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
                changeState({
                    ...state, 
                    state: "progress",
                    gameCondition: "게임 시작 대기중",
                    status: new Omok(state.boardWidth, state.boardHeight)
                });
                localStorage.setItem("cellSize", "32px");
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

    if(state.status == null) {
        changeState({...state, status: new Omok(state.boardWidth, state.boardHeight)})
    } else if(typeof state.status != typeof Omok) {
        if(!state.status.hasOwnProperty("board")) {
            let data = Omok.loadData(state.status);
            changeState({...state, status: data})
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

    // game

    function Board({board, place = (e, x, y) => { alert(x + " / " + y); }}){
    const cellSize = localStorage.getItem("cellSize") != null ? localStorage.getItem("cellSize") : "32px", cellIntSize = parseInt(cellSize);
        if(board != null && typeof board.board == typeof Function) {
            return (
                <div className="board">
                    {board.board().map((array, y) => (<div className="line" key={y}>
                        {array.map((val, x) => (
                            <svg
                                alt="cell" key={y * array.length + x}
                                onClick={(e) => {place(e, x, y); console.log(x + " / " + y)}}
                                width={cellSize} height={cellSize}
                            >
                                <rect width={cellSize} height={cellSize} fill="sandybrown"/>
                                <line x1={cellIntSize / 2} y1={0} x2={cellIntSize / 2} y2={cellIntSize} stroke="black" strokeWidth={cellIntSize / 10}/>
                                <line x1={0} y1={cellIntSize / 2} x2={cellIntSize} y2={cellIntSize / 2} stroke="black" strokeWidth={cellIntSize / 10}/>
                                <circle cx={cellIntSize / 2} cy={cellIntSize / 2} r={cellIntSize / 3} fill={val} />
                                {/* 외곽선 */}
                                {(() => x === 0 || x === array.length - 1 ? 
                                (<line x1={x === 0 ? 0 : cellIntSize} y1={0} x2={x === 0 ? 0 : cellIntSize} y2={cellIntSize} stroke="black" strokeWidth={cellIntSize / 10} />) : "")()}
                                {(() => y === 0 || y === array.length - 1 ? 
                                (<line x1={0} y1={y === 0 ? 0 : cellIntSize} x2={cellIntSize} y2={y === 0 ? 0 : cellIntSize} stroke="black" strokeWidth={cellIntSize / 10} />) : "")()}
                            </svg>
                        ))}
                        <br/>
                    </div>))}
                </div>
            );
        } else {
            return (<div>loading...</div>)
        }
    };

    // game info
    
    function SpecList({props}) {
        return (
            <div className="speclist" >

            </div>
        );
    }

    function Timer({second = 0, runner, pause = false}) {
        return (
            <>
                개발 예정
            </>
        );
    }

    return (
        <div className="gameboard">
            {(() => state != null ? <Board board={state.status} place={placeEvent}/> : null)()}
            <br/>
            <div className="information">
                <h2 className="title"> 상태창 </h2>
                게임 진행 상태 : {state.gameCondition} <br/>
                타이머 : <Timer /> <br/>
                <button>항복</button>
                <SpecList/> <br/>
            </div>
            {/* fab */}
            <div className="circle" style={{
                position: "fixed", 
                backgroundColor: "pink", 
                right: "3%", bottom: "3%"
                }}> a</div>
        </div>
    );
}

export default Gameboard;