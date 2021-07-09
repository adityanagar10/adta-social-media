import React from 'react'
import TopBar from '../../components/top-bar/top.bar.component'
import LeftBar from '../../components/left-bar/left.bar.component'
import RightBar from '../../components/right-bar/right.bar.component'
import Feed from '../../components/feed/feed.component'
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