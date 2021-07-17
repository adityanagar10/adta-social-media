
import "./online.styles.css";

export default function Online({user}) {
  const pubfoler = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={pubfoler+user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}