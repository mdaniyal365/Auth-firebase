import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../config/firebaseConfig";
import {signInWithEmailAndPassword } from "firebase/auth";


// import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";






function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context =useContext(UserContext)
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigate = useNavigate();
  

   console.log(context.user);


  
 

  const HandleSubmit =e =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
    // Signed in 
    console.log(res);
    context.setUser(res.user.email);
    // console.log(context.setUser({ email: res.user.email, uid: res.user.uid }));
    // ...
    return navigate("/");
     
  })
  .catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode)
    //alert(errorMessage)

    
    toast(error.message, {
      type: "error"
    })
    // ..
  });

  }  
 

  
  
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="bg-blue-700 p-6 text-lg mx-52 pl-52  rounded-lg  text-white cursor-default ">
        signin
      </div>
      <form className="flex flex-col p-52 " onSubmit={HandleSubmit}>
        <div className="p-4 mb-10">
          <span className="bg-blue-700 p-5 rounded-lg mr-9 text-white cursor-default px-24">
            E-mail
          </span>
          <input
            id="email"
            placeholder="provide your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-lg"
            type="email"
            name="email"
          />
        </div>
        <div className="p-4 mb-10">
          <span className="bg-blue-700 p-5 rounded-lg mr-9 text-white cursor-default px-20">
            Password
          </span>
          <input 
           placeholder="provide your password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="p-4 rounded-lg" type="password" name="password" />
        </div>
        <div className="">
        <input className="bg-blue-700 p-4 px-52 rounded-lg  text-white cursor-default " type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Signin;
