import React, { useState } from 'react'
import axios from 'axios'

const UploadMusic = () => {

  const [title,setTitle]= useState("");
  const [file,setFile]= useState(false);
  const [loading,setLoading]= useState(false);
  const [image, setImage]= useState(null);
  


  const handleSubmit= async(e) =>{
    e.preventDefault()

    if(!file||!title)
      return alert("Title or File are compulsory")

    const formData= new FormData();
    formData.append("title", title)
    formData.append("file",file)
    formData.append("image", image)


    setLoading(true);
    try{
      const res = await axios.post("http://localhost:3000/api/music/upload", formData,{
       withCredentials: true,
       headers: {
    'Content-Type': 'multipart/form-data' 
  }
      })
      alert("Song uploaded successfully")
      
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div   className="flex items-center justify-center h-screen bg-black text-white"  >
      <form  onSubmit={handleSubmit}
      className="bg-neutral-900 p-8 rounded-lg flex flex-col gap-5 w-96"
      >
        <h2 className="text-2xl font-bold items-center">Upload Music</h2>

        {image && (
  <img 
    src={URL.createObjectURL(image)} 
    className="w-24 h-24 object-cover rounded-md mx-auto" 
    alt="preview" 
  />
)}

        <input
        type='text'
        placeholder='Song Title'
        className="p-2 bg-neutral-800 rounded outline-none border border-neutral-700"
        onChange={(e)=>setTitle(e.target.value)}

        />

        <input
        type='file'
        accept='audio/*'
        className="cursor-pointer"
        onChange={(e)=>setFile(e.target.files[0])}
        />

        <input
        type='file'
        accept='image/*'
        className="cursor-pointer bg-neutral-800 p-2 rounded"
        onChange={(e)=>setImage(e.target.files[0])}
        />

        <button
        disabled={loading}
        className="bg-green-500 text-black font-bold p-2 rounded-full hover:scale-105 transition"
        
        >{loading? "Uploading...": "Publish Song"}</button>
      </form>
    </div>
  )
}

export default UploadMusic
