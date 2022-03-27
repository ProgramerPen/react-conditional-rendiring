import React from "react";
import Login from "./Login.jsx";
import Register from "./register";
var userIsRegistered = true;

function checkLogin(){
 return( userIsRegistered ? <Login /> : <Register />
 )}
function App() {
  return (
    <div className="container">{checkLogin()}</div>
  );
}
export default App;

