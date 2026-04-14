import React, { useState } from 'react'
import axios from 'axios'
import bg from './Photos/portrait-young-man-with-dreadlocks-wireless-headphones-listening-music-nature-sunset_629315-4387.avif'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate= useNavigate();

  const [username , setUsername]=useState("")
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")

  const handleSubmit= async(e)=>{
    e.preventDefault()

    try{ const res= await axios.post(" http://localhost:3000/api/auth/login",  {username: username,
        email: email,
        password: password},{ withCredentials: true })
        console.log(res.data)

        if (res.status === 200) {

          localStorage.setItem("user", JSON.stringify(res.data.user));
         navigate('/home') 
    }

}catch(error){
console.log(error.response?.data || error.message)
}

   
  }

  return (
    <div   className=" h-screen w-full flex  items-center justify-center"   style={{
            backgroundImage:`url(${bg})`,
            backgroundSize:"cover",
            backgroundPosition:"center"}}>

      <div className="bg-black/60  w-96 flex flex-colm item- center justify-center  p-10 rounded  text-white gap-4 ">
        <form className="flex flex-col gap-4"  onSubmit={handleSubmit}>
             
             <div className="flex items-center gap-4">
            <label  className="w-24 text-white ">User-Name</label>
            <input type="text"  name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
             </div>

            <div className="flex items-center gap-4">
            <label className="w-24 text-white ">email</label>
            <input type="email" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
             </div>


            <div className="flex items-center gap-4">
            <label className="w-24 text-white " >Password</label>
            <input type="password" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>

              <button className="bg-green-500 p-2 rounded-full text-black font-bold " type="Submit"  >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
