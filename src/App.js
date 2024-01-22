import logo from "./logo.svg";
import "./App.css";
import { Auth } from "./Auth.js";
import{useState,useRef} from 'react';

import Cookies from "universal-cookie";
import {Chat}  from "./Chat.js";
import{signOut} from 'firebase/auth'
import { auth } from "./firebase-config.js";

const cookies = new Cookies();

function App() {
  const [IsAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [Room, setRoom] = useState(null);
  const roomInputRef = useRef(null)
  if (!IsAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }
  const signOutHandler=async()=>{
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }
  
  return Room ? <Chat room={Room}/> : (<div>
    <label htmlFor="roominput">Enter Room number:</label>
    <input name="roominput" ref={roomInputRef}></input>
    <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter chat</button>

    <button onClick={signOutHandler}>Sign Out</button>
  </div>);
}

export default App;
