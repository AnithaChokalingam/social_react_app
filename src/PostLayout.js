import React from 'react'
import { Link} from 'react-router-dom'
import Feed from './Feed'
const PostLayout = ({post,deletePost}) => {
  return (
    <>
    <Feed post={post}
    deletePost={deletePost}/>
   <Link to='/newPost' >
   <h2>NEW POST</h2> 
   </Link>

    </>
  )
}

export default PostLayout