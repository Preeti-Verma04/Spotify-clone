import axios from 'axios'
import React, { useState } from 'react'
import bg from './Photos/young-woman-headphones-listening-music-sunset_416256-6672.avif'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const navigate= useNavigate()

   const[username,setUsername]= useState("")
   const[email,setEmail]= useState("")
   const[password,setPassword]= useState("")
   const[role,setRole]= useState("")
   const [submitted, setSubmitted] = useState(false);




   const handleSubmit = async(e)=>{
    e.preventDefault()

    
    try{

      const res = await axios.post("http://localhost:3000/api/auth/register", {
        username: username,
        email: email,
        password: password,
        role: role
      }, {withCredentials:true});
     
          console.log(res.data)

          if (res.status === 201||res.status === 200) {

            localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate('/home') 
    }

  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}

   

  return (
    <div  className=" h-screen w-full flex  items-center justify-center"   style={{
        backgroundImage:`url(${bg})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
        
    }}>

        <div className="bg-black/60  w-96 flex flex-colm item- center justify-center  p-10 rounded  text-white gap-4 ">
            
            <form  onSubmit={handleSubmit}className="flex flex-col gap-4">
                 <div className="flex items-center gap-4">
                <label className="w-24 text-white ">User-Name</label>
                <input type="text" name="username"
                    placeholder="Username" onChange={(e)=>
                    setUsername(e.target.value) }/>
                    </div>


                  <div className="flex items-center gap-4">
                <label className="w-24 text-white">E-mail</label> 
                <input type="email"  name="email"
                     placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>


                  <div className="flex items-center gap-4">
                <label className=" w-24 text-white">Password</label>
                <input type="password" placeholder="password" name="password"
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>

          <div className=" text-white">
          <label>
            <input type="radio" name="role" value="user"  onChange={(e)=>setRole(e.target.value)}/> User
          </label>

          <label className="ml-4">
            <input type="radio" name="role" value="artist" onChange={(e)=>setRole(e.target.value)}/> Artist
          </label>
        </div>


               
        <button
          type="submit"
          className={`${submitted ? "bg-gray-500" : "bg-green-500"} p-2 rounded-full text-black font-bold`}
        >
          Sign up
        </button>
            </form>
        </div>
      
    </div>
  )
}

export default SignUp;
