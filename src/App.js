import React from 'react';
import ReactDOM from 'react-dom';
// import '../scss/index.scss'
export default function App() {
  return (
    <>
    <h1>App component again </h1>
    <button onClick={()=>{
      electron.notificationAPI.sendNotification('This app sent a notification')
    }}>Notify</button>
    </>
  )
}