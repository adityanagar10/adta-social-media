import React from 'react'
import TopBar from '../top-bar/top.bar.component'
import LeftBar from '../left-bar/left.bar.component'
import RightBar from '../right-bar/right.bar.component'
import Feed from '../feed/feed.component'
import './home.style.css'

export default function Home(){
    return(
        <>
        <TopBar />
        <div className="homeContainer">
          <LeftBar />
          <Feed/>
          <RightBar/>
        </div>
      </>
        )
}