import React from 'react'
import Post from './Post'
const Feed = ({ post,deletePost }) => {
    return (
        <>
            {post.map(i => (<Post key={i.id} post={i} 
            deletePost={deletePost}/>))}
        </>
    )
}

export default Feed