const FriendListItem = props => {
  return (
    <li className="item" >
      <span className="status">{props.data.isOnline}</span>
      <img
        className="avatar"
        src={props.data.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{props.data.name}</p>
    </li>
  );
};
export default FriendListItem;
