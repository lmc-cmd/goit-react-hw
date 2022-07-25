import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = props => {
  return (
    <ul className="friend-list" style={{display: 'flex', listStyle: 'none'}}>
      {props.friends.map(el => (
        <FriendListItem key={el.id} data={el} />
      ))}
    </ul>
  );
};
export default FriendList;
