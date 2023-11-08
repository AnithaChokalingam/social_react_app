import React from 'react'
import { useState } from 'react';
import Api from "./Api/post"

const NewPost = ({post,setPost}) => {
  const [input,setInput] =useState('');
  const [message,setmessage] =useState('');

const addPost=async()=>{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       const currentDate=new Date();
       const month=months[currentDate.getMonth()];
       const year=currentDate.getFullYear();
       const date=currentDate.getDate();
       const time=currentDate.toLocaleTimeString();
       
       const newpost={
        id:post.length+1,content:input,
        body:message,
        datetime: month+" "+date+","+year+" "+time

      };
      const response=await Api.post("post",newpost);
      const allItems=[...post,response.data];
      setPost(allItems);
      setInput('');
      setmessage('');
      
}
  return (
    <main>
      <h1>Create Your post </h1>
      <form className='form1' onSubmit={(e)=>e.preventDefault()}>
         <label className='label'>title</label>
         <input className="input1" type="/text" placeholder='Title here' value={input} onChange={(e)=>setInput(e.target.value)}>

         </input>
         <br/>
         <label className='label'>Message</label>
         <input className="input1" type="/text" placeholder='Title here' value={message} onChange={(e)=>setmessage(e.target.value)}>
       
         </input>
         <br></br>
         <button 
         onClick={()=>addPost()}>Add Post</button>
      </form>
    </main>
  )
}

export default NewPost