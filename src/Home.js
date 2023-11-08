import React from 'react'
import Feed from './Feed'
const Home = ({post,deletePost}) => {
  return (
    <main>
      <Feed post={post}
      deletePost={deletePost}></Feed>
      </main>
  )
}

export default Home