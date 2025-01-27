import React, { useState } from "react";
import  './form.css'

function Signin({renderThis}){

    
      const  signin =  <>
       <div id="signInForm" className="sign-or-log">
      <h2>Sign In</h2>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        <br /> <br />
        <label for="username">username:</label>
        <input type="text" name="username" placeholder="try to be unique" /> <br />
        <button type="submit">Sign In</button>
      </form> 
       </div>
        </>

     const login = <>
          <div className="sign-or-log">
            <h2 id="login">Log In</h2>
            <form action="localhost:3000">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required />
              <br />
              <label for="loginPassword">Password:</label>
              <input type="password" id="loginPassword" name="loginPassword" placeholder="Enter your password" required />
              <br />
              <button type="submit">Log In</button>
            </form>
            </div>
          </>
       
       return renderThis ==="signIn"?signin:login
      
    
}



function Form(){

    const [render,changeRender] = useState("signIn")

    return(
        <div id="account-section">
            <form >
              <div id="question">
               <div onClick={()=>{changeRender("signIn");  }} id="sign-button" className="sign-log-buttons"> Sigin</div>
               <div onClick={()=>{changeRender("LogIn")}}id="log-button" className="sign-log-buttons">  Login  </div> 
               </div>
            

            </form>
            <Signin renderThis={render}/>
        
        </div>
    )
}

export default Form