import React from 'react'
import Post from "../post/post.component"
import { Posts } from '../../dummyData'
import Share from "../share/share.component"
import './feed.styles.css'


export default function Feed(){
    return (
        <div className="feed">
          <div className="feedWrapper">
           <Share />
           {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
          </div>
        </div>
      );
}