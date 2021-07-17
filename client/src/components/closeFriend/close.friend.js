import './close.friend.css'

export default function CloseFriend({user}) {
    const pubfoler = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={pubfoler+user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    );
  }