import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "./post.styles.css";
import { MoreVert } from "@material-ui/icons";
import {format} from "timeago.js"


export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [user,setUser] = useState({})
  const [isLiked,setIsLiked] = useState(false)
  const pubfol = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get(`/users/?userId=${post.userId}`);
      setUser(res.data)
    }
    fetchUser()
  },[post.userId])

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
            <img
              className="postProfileImg"
              src={user.profilePicture || pubfol+"/person/noAvatar.png"}
              alt=""
            />

            </Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={pubfol+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={pubfol+"/like.png"} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={pubfol+"/heart.png"} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{post.likes.length} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}