import {React , useState, useEffect} from 'react'
import axios from "axios"
import Post from "../post/post.component"
import Share from "../share/share.component"
import './feed.styles.css'


export default function Feed(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("posts/timeline/60f2b041b6a7882d3c05c675");
      setPosts(res.data)
    }
    fetchPosts()
  },[])
    return (
        <div className="feed">
          <div className="feedWrapper">
           <Share />
            {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} 
          </div>
        </div>
      );
}