import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = props => {
  return (
    <ul className="friend-list">
      {props.friends.map(el => (
        <FriendListItem data={el} />
      ))}
    </ul>
  );
};
export default FriendList;
