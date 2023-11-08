import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch}) => {
  return (
    <nav className='nav'>
      <form className="form" onSubmit={(e)=>e.preventDefault()}>
        <input className='input' type="text"
         placeholder='Search post' 
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         
         ></input>
         <ul>
          <li>
            <Link className="Link" to="/">HOME</Link>
            </li>
            <br/><br/>
            <li>
            <Link className="Link" to="post">POST</Link>
            </li>
            <br/><br/>
            <li>
            <Link className="Link" to="about">ABOUT</Link>

            </li>
          
         </ul>

      </form>
    </nav>
  )
}

export default Nav