import React from "react";
import Input from "./Input";

function Login(){
       return( 
           
        <form className="form">
        <Input inType="text" inHolder="enter your username" />
        <Input inType="password" inHolder="Password? " />
        <button type="submit">Login</button>
      </form>
      );
};
export default Login;