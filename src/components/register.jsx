import React from "react";
import Input from "./Input";

function Register(){
       return( 
           
        <form className="form">
        <Input inType="text" inHolder="enter your username" />
        <Input inType="password" inHolder="Password? " />
        <Input inType="password" inHolder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
      );
};
export default Register;