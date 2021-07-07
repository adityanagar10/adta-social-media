import React from 'react'
import Post from "../post/post.component"
import Share from "../share/share.component"
import './feed.styles.css'


export default function Feed(){
    return (
        <div className="feed">
          <div className="feedWrapper">
           <Share />
           {/* <Post /> */}
          </div>
        </div>
      );
}