import "./profile.styles.css";
import Topbar from "../../components/top-bar/top.bar.component";
import Sidebar from "../../components/left-bar/left.bar.component";
import Feed from "../../components/feed/feed.component";
import Rightbar from "../../components/right-bar/right.bar.component";

export default function Profile() {
  const pubfol= process.env.REACT_APP_PUBLIC_FOLDER
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
                src={pubfol+"post/3.jpeg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={pubfol+"person/1.jpeg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}