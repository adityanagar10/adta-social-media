import React from 'react';
import {Link} from "react-router-dom"
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import './top.bar.styles.css'


export default function Topbar(){
    return (
        <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/"  style={{textDecoration :"none"}}><span className="logo">A D T A MEDIA</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
         <Link to="/profile"><img src="/assests/person/1.jpeg" alt="" className="topbarImg"/></Link>
      </div>
    </div>

    )
}