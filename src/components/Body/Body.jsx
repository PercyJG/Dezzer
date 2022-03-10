import React from 'react'
import Albums from './Albums/Albums'
import Artist from './Artist/Artist'
import './Body.css'
import Main from './Main/Main'
import SideNav from './SideNav/SideNav'

function Body() {
  return (
    <>
      <div className="body">
          <SideNav />
          <Main />
      </div>
    </>
  )
}

export default Body