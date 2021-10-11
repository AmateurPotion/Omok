import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Joinform.scss';


const Joinform = () => {
  const history = useHistory();

  const [state, changer] = useState({
    joinMode: "create",
    startText: "방 만들기",
    disableSizeInput: false,
    disablePassword: true
  });

  // reference sync
  const form = React.createRef();
  const roomName = React.createRef();
  const password = React.createRef(), passwordable = React.createRef();
  const boardWidth = React.createRef(), boardHeight = React.createRef();

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
      password:""
    };
    if(!state.disablePassword) {
      info["password"] = password.current.value;
    } else {
      delete info.password;
    }
    sessionStorage.setItem("game", JSON.stringify(info));
    history.push("/board");
  }

  const changeJoinMode = (e) => {
    changer({...state, joinMode: e.target.id});
    switch (e.target.id) {
      case "create":
        changer({...state, disableSizeInput: false, startText: "방 만들기", joinMode: "create"})
      return;

      case "join":
        changer({...state, disableSizeInput: true, startText: "게임 참여", joinMode: "join"});
      return;

      case "spectate":
        changer({...state, disableSizeInput: true, startText: "관전하기", joinMode: "spectate"});
      return;

      case "replay":
        changer({...state, disableSizeInput: true, startText: "게임 다시보기", joinMode: "replay"});
      return;

      default:
      return;
    }
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
        <div className="password">
          <input 
            className="passwordable" name="passwordable" ref={passwordable}
            onChange={() => {changer({...state, disablePassword: !passwordable.current.checked})}}
            type="checkbox" 
          />
          <input
            className="password" name="password" ref={password} disabled={state.disablePassword}
            type="password" placeholder="방 접속 암호" 
            required minLength={4}
          />
        </div>
        <div className="size">
          <input
            name="boardWidth" ref={boardWidth} disabled={state.disableSizeInput}
            type="number" placeholder="가로"
            required min={15} max={100}
          />
          <input
            name="boardHeight" ref={boardHeight} disabled={state.disableSizeInput}
            type="number" placeholder="세로"
            required min={15} max={100}
          />
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