import {React , useState, useEffect} from 'react'
import axios from "axios"
import Post from "../post/post.component"
import Share from "../share/share.component"
import './feed.styles.css'


export default function ({username}){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/60f2b054b6a7882d3c05c677");
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username]);
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