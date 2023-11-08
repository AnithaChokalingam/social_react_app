
import './App.css';
import Header from './Header';
import NewPost from './NewPost';
import Missing from './Missing';
import Footer from './Footer';
import PostPage from './PostPage';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Post from './Post';
import { Routes, Route, Link } from 'react-router-dom';
import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import Feed from './Feed';
import Api from "./Api/post"


function App() {
  const [SearchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([])

  useEffect((()=>{
    const fetchPost= async()=>{
      const response=await Api.get("/post");
      setPost(response.data);
    }
    fetchPost();

  }),[]);
  useEffect(()=>{
    const filteredresults=post.filter((post1)=>((post1.body).toLowerCase()).includes(search.toLowerCase())||
    ((post1.content).toLowerCase()).includes(search.toLowerCase()));

    setSearchResult(filteredresults.reverse());
  }

,[post,search])

const deletePost=async(id)=>{
   await Api.delete(`post/${id}`)
  const posts= post.filter((item)=>item.id!=id)
  setPost(posts);
    

 }
  return (
    <div className="App">
      <Header title="My Blog" />
      <Nav search={search}
        setSearch={setSearch} />
      <Routes>
        <Route path='/post'
          element={<PostLayout 
            post={post}
            deletePost={deletePost} />} />

        <Route path='/nav'
          element={<Nav search={search}
            setSearch={setSearch} />} />

        <Route path='/'
          element={<Home post={SearchResult}
          deletePost={deletePost}/>} />

        <Route path='/newpost'
          element={<NewPost post={post}
          setPost={setPost} />} />

        <Route path='/about'
          element={<About />} />

        <Route path='*'
          element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
