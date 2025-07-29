import React from 'react'
import { NavLink } from 'react-router-dom'

function index() {
  return (
    <div className='container'>
    <ScrollRevealWrapper>
      <div className="pagenotfound">
        <h2>404</h2>
        <h3>Something went wrong...</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nesciunt tempore aut excepturi quasi, enim totam corrupti hic impedit labore!</p>
        <NavLink to="/">
            <button className="pagenotfound-btn">
            Home
            </button>
        </NavLink>
      </div>
    </ScrollRevealWrapper>
    </div>
  )
}

export default index
