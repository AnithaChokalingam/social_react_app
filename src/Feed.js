import React from 'react'
import Post from './Post'
import NewPost from './NewPost'
const Feed = ({ post,deletePost }) => {
    return (
        <>
            {post.map(i => (<Post key={i.id} post={i} 
            deletePost={deletePost}/>))}
        </>
    )
}

export default Feed