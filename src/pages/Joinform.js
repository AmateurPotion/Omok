import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Joinform.scss';

const palette = [
  "pink", "red", "yellow", "orange", "greenyellow", "green", "skyblue", "blue", "white", "black"
]

const Joinform = () => {
  const history = useHistory();

  const [state, changer] = useState({
    joinMode: "create",
    startText: "방 만들기",
    color: palette[0],
    disableSetting: false,
    disableTimer: true,
    disablePassword: true
  });

  // reference sync
  const form = React.createRef();
  const roomName = React.createRef();
  const timer = React.createRef(), timerable = React.createRef();
  const password = React.createRef(), passwordable = React.createRef();
  const boardWidth = React.createRef(), boardHeight = React.createRef();
  const colorPicker = React.createRef();

  useEffect(() => {
    // mount
    // page load
    document.querySelector("title").innerHTML = "Omok";

    return () => {
      // unmount
    }
  } ,[]);

  // event
  const startGame = (e) => {
    let info = {
      boardWidth: boardWidth.current.valueAsNumber,
      boardHeight: boardHeight.current.valueAsNumber,
      name: roomName.current.value,
      state: "start",
      joinMode: state.joinMode,
      timer: 5,
      password: "",
      color: ""
    };
    
    if(!state.disablePassword) {
      info["password"] = password.current.value;
    } else {
      delete info.password;
    }

    if(!state.disableTimer) {
      info["timer"] = timer.current.value;
    } else {
      delete info.timer;
    }

    sessionStorage.setItem("game", JSON.stringify(info));
    history.push("/board");
  }

  const changeJoinMode = (e) => {
    let data = {...state, joinMode: e.target.id};
    switch (e.target.id) {
      case "create":
        data = {...data, disableSetting: false, startText: "방 만들기"};
      break;

      case "join":
        data = {...data, disableSetting: true, startText: "게임 참여"};
      break;

      case "spectate":
        data = {...data, disableSetting: true, startText: "관전하기"};
      break;

      case "replay":
        data = {...data, disableSetting: true, startText: "게임 다시보기"};
      break;

      default:
      break;
    }
    changer(data);
  };


  return (
    <div className="joinform">
      <form className="inputform" ref={form} onSubmit={startGame}>
        <input
          className="roomName full" name="roomName" ref={roomName}
          type="text" placeholder="방 이름" 
          required minLength={3}
        />
        <br/>
        <select 
          className="colorPicker" name="colorPicker" ref={colorPicker} 
          defaultValue="white" onChange={e => {console.log(e.target.value);colorPicker.current.setAttribute("background", e.target.value)}} 
        >
          {palette.map((val, index) => 
          <option key={index} style={{color:"gray", background: val}}>{val}</option>
          )}
        </select>
        <br/>
        <div className="timer inputDiv">
          <input 
            className="timerable" name="timerable" ref={timerable}
            onChange={() => {changer({...state, disableTimer: !timerable.current.checked})}}
            type="checkbox" 
          />
          <input
            className="timer inputSpace" name="timer" ref={timer} disabled={state.disableTimer}
            type="number" placeholder="타이머" 
            required min={1}
          />
        </div>
        <div className="password inputDiv">
          <input 
            className="passwordable" name="passwordable" ref={passwordable}
            onChange={() => {changer({...state, disablePassword: !passwordable.current.checked})}}
            type="checkbox" 
          />
          <input
            className="password inputSpace" name="password" ref={password} disabled={state.disablePassword}
            type="password" placeholder="방 접속 암호" 
            required minLength={4}
          />
        </div>
        <div className="roomSetting" style={{display: state.disableSetting ? "none" : ""}}>
          <div className="size">
            <input
              name="boardWidth" ref={boardWidth} disabled={state.disableSetting}
              type="number" placeholder="가로"
              required min={15} max={100}
            />
            <input
              name="boardHeight" ref={boardHeight} disabled={state.disableSetting}
              type="number" placeholder="세로"
              required min={15} max={100}
            />
          </div>
          
        </div>
        <br/>
        <div className="joinMode">
          <input
            name="joinMode" id="create"
            onChange={changeJoinMode}
            type="radio" value="create" defaultChecked
          />방 만들기 &nbsp;
          <input
            name="joinMode" id="join"
            onChange={changeJoinMode}
            type="radio" value="join"
          />참여 &nbsp;
          <input
            name="joinMode" id="spectate"
            onChange={changeJoinMode}
            type="radio" value="spectate"
          />관전 &nbsp;
          <input
            name="joinMode" id="replay"
            onChange={changeJoinMode}
            type="radio" value="replay"
          />리플레이
        </div>
        <br/>
        <input
          className="start"
          type="submit" value={state.startText}
        />
      </form>
    </div>
  );
};

export default Joinform;