import {React , useState, useEffect, useContext} from 'react'
import axios from "axios"
import Post from "../post/post.component"
import Share from "../share/share.component"
import './feed.styles.css'
import { AuthContext } from "../../context/AuthContext";


export default function ({username}){
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
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