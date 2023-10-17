import React from 'react'
import { useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from "../utils/userSlice";
import { Logo, Supported_Lang } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

const navigate = useNavigate();
const dispatch = useDispatch();

const user = useSelector((store) => store.user)
const ShowgptOptions = useSelector((store) => store.gpt.showGptSearch)



  const handleSingOut = () =>{
    signOut(auth)
    .then(() => {
     
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }


  const handleSearch = () => {
// console.log("clicked")
    dispatch(toggleGptSearchView())
  }

const handleLanguageChange = (e) => {
  // console.log(e.target.value)
  dispatch(changeLanguage(e.target.value))

}

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }));
  navigate("/browse")
       
      } else {
     dispatch(removeUser());
     navigate("/")
     
      }
    });

    return () => unsubscribe();
    // component unmount //


  
  },[])



  return ( <>
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      
        <img 
        className='w-44'

        src={Logo}
        alt="logo"
        />


   {user &&(

<div className='flex p-2'>

  {ShowgptOptions &&
   (
<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
  {
    Supported_Lang.map((lang) => (
      <option key={lang.identifier} value={lang.identifier}>
        {lang.name}
      </option>
    ))
  }
</select>

)}




  <button className='py-2 px-4  m-2 bg-purple-700 text-white rounded-lg ' onClick={handleSearch} >
    {ShowgptOptions ? "Homepage" : "GPT Search"}
    
    </button>
   <img 
     className='w-10 h-10'
         src={user?.photoURL}
      alt=""/>
     <button onClick={handleSingOut} className='font-bold text-white'>(Sing Out) </button>
    </div>

   )

   } 



        
    </div>


    
  </>)
}

export default Header