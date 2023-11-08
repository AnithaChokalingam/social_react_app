import React from 'react'

const Post = ({post,deletePost}) => {
    

    const color=(id)=>((id%2===0)?"#ADC4CE":"white")
  return (
    <>
    
    <div className="postdiv" style={
        {
            backgroundColor:color(post.id),
            color:"black",
            padding:10
        }
        }>
            <div className='deletePost'>
        <button className='deletebutton'
        onClick={()=>{deletePost(post.id)}}
        >delete</button>
    </div>
        <h2>{post.content}</h2>
        
        <p className='postdate'>{post.datetime}</p>
        <p className='postbody'>
            {post.body}
        </p>
        
    </div>
    </>
  )
}

export default Post