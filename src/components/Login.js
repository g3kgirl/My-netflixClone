import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react';
import { CheckValidData } from '../utils/Validation';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from '../utils/constants';



const Login = () => {
const [isLoginForm,setSingupForm] = useState(true);
const [errorMessage,seterrorMessage] = useState();

const dispatch = useDispatch();

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);


 const handleToggleForm = () => {
    setSingupForm(!isLoginForm);
   };



const handleButonClick = ( ) => {
    const message =  CheckValidData(email.current.value,password.current.value);
    seterrorMessage(message)  

if(message) return;
  //sing in and sinup i need to do here 

if(!isLoginForm){




  createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
updateProfile(user, {
  displayName: name.current.value,
   photoURL:USER_AVATAR
}).then(() => {
  const {uid,email,displayName,photoURL} = auth.currentUser;
  dispatch(
    addUser
    ({
      uid:uid,
    email:email,
    displayName:displayName,
    photoURL:photoURL
  }));



 
})
.catch((error) => {
  
  seterrorMessage(error.message)
});


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
seterrorMessage(errorCode+ "" +errorMessage)
    
  
  });
// singup logic
}else{
//login logic



signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "" +errorMessage)
  });
}


}
  return (
    <div>
<Header/>

<div className='absolute'>
      <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt="logo"
        />
       </div>

       <form onSubmit={(e) => e.preventDefault()}
       className='
        absolute p-12 my-36 mx-auto right-0 left-0 bg-black w-3/12 text-white rounded-lg bg-opacity-80 '
        >
        <h1 className='font-bold text-3xl py-4'>{ isLoginForm ?  "Sign In" : "Sign Up"}</h1>
{
    !isLoginForm  &&(
<input type="text"
ref={name}
          placeholder="Your Full Name" 
          className="p-4 my-4 w-full bg-gray-700"  />

    ) 
}
        <input type="text"
        ref={email}
          placeholder="Email Adress" 
          className="p-4 my-4 w-full bg-gray-700"  />

        <input type="password" 
        ref={password}
         placeholder="Password"
         className="p-4 my-4 w-full bg-gray-700"
          />


<p className='font-bold text-lg text-red-500 py-2'>{errorMessage}</p>


        <button  className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButonClick} >
            { isLoginForm ?  "Sign In" : "Sign Up"}
            </button>

        <p onClick={handleToggleForm}>{isLoginForm ? "New to Netflix ? Sign up now" : "User is Already register" }</p>

       </form>
    </div>
  )
}

export default Login