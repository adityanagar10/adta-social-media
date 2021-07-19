import "./profile.styles.css";
import { useEffect,useState } from "react";
import axios from "axios"
import Topbar from "../../components/top-bar/top.bar.component";
import Sidebar from "../../components/left-bar/left.bar.component";
import Feed from "../../components/feed/feed.component";
import Rightbar from "../../components/right-bar/right.bar.component";
import { useParams } from "react-router";

export default function Profile() {
  const pubfol= process.env.REACT_APP_PUBLIC_FOLDER
  const [user,setUser] = useState({})
  const username = useParams().username

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get(`/users/?username=${username}`);
      setUser(res.data)
    }
    fetchUser()
  },[username])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || pubfol+"/post/noBanner.png" }
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || pubfol+"/person/noAvatar.png" }
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}