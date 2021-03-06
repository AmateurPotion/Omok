import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Checkbox } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import { Omok } from "../game";
//import LioWebRTC from 'liowebrtc';
import './Gameboard.scss';

//const publish = false; (publish ? "./" : "") + 

const Gameboard = () => {
    console.log("update");
    const history = useHistory();

    const [state, changeState] = useState(JSON.parse(sessionStorage.getItem("game")));

    useEffect(() => {
        // mount
        // page load
        document.querySelector("title").innerHTML = "Omok";
        
        // Game loading
        if(state != null) {
            if(state.state === "start") {
                const toState = {
                    ...state, 
                    state: "progress",
                    gameCondition: "게임 시작 대기중",
                    gridView: true,
                    timerView: true,
                    color: state.joinMode === "create" ? "black" : 
                            state.joinMode === "join" ? "white" : " transparent",
                    status: new Omok(state.boardWidth, state.boardHeight)
                };
                toState.status.winEvents.push(`console.log("win!")`);
                
                if(!state.hasOwnProperty("timer")) {
                    toState.timerView = false;
                }

                changeState(toState);
                if(localStorage.getItem("cellSize") == null) {
                    localStorage.setItem("cellSize", "32px");
                }
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
    if(state != null && state.hasOwnProperty("status")) {
        if(!state.status.hasOwnProperty("place")) {
            changeState({...state, status: Omok.loadData(state.status)})
        }
    }
    
    // events
    
    const placeEvent = (e, x, y) => {
        if(state.status.getColor(x, y) === "transparent") {
            changeState({...state, run: state.status.place(x, y, state.color)});
            changeState({...state, run: null});
        }
    };
    
    // webrtc(module - liowebrtc) events
    /*
    const joinHandler = (e) => {
        
    };
    */
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
                                width={cellSize} height={cellSize}
                            >
                                <rect width={cellSize} height={cellSize} fill="sandybrown"/>
                                {(() => state.gridView ? <>
                                    <line x1={cellIntSize / 2} y1={0} x2={cellIntSize / 2} y2={cellIntSize} stroke="black" strokeWidth={cellIntSize / 10}/>
                                    <line x1={0} y1={cellIntSize / 2} x2={cellIntSize} y2={cellIntSize / 2} stroke="black" strokeWidth={cellIntSize / 10}/>
                                </>: "" )()}
                                
                                {/*<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>*/}
                                <circle
                                    onClick={(e) => {place(e, x, y);}}
                                    onMouseOver={e => {if(board.getColor(x, y) === "transparent"){e.target.setAttribute("fill", "gray"); e.target.setAttribute("opacity", "0.8");}}}
                                    onMouseOut={e => {e.target.setAttribute("fill", val); e.target.setAttribute("opacity", "1");}}
                                    cx={cellIntSize / 2} cy={cellIntSize / 2} r={cellIntSize / 3} fill={val}
                                />
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
        let m = 0, s = second;
        for(;s > 60; s -= 60) {
            m++;
        }
        return state.timerView ? (
            <>
                타이머 : {(() => m !== 0 ? (<>{m}분</>) : "")()} {s}초 남음 <br/>
            </>
        ) : "";
    }

    return state !== null ? (
        <div className="gameboard">
            {(() => state != null ? <Board board={state.status} place={placeEvent}/> : null)()}
            <br/>
            <div className="information">
                <h2 className="title"> 상태창 </h2>
                게임 진행 상태 : {state.gameCondition} <br/>
                <Timer second={state.hasOwnProperty("timer") ? state.timer : 0} />
                그리드 on/off <Checkbox defaultChecked={true} onChange={(e) => {changeState({...state, gridView: e.target.checked})}}> a</Checkbox>
                <Button onClick={e => console.log(e.target.ownerDocument)}>항복</Button> 
                <SpecList/> <br/>
            </div>
            <div className="circle fab"><CategoryIcon/></div>
        </div>
    ) : "";
}

export default Gameboard;