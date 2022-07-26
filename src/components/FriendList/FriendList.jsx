import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = props => {
  return (
    <ul className="friend-list" style={{display: 'flex', listStyle: 'none', padding: '0'}}>
      {props.friends.map(el => (
        <FriendListItem key={el.id} data={el} />
      ))}
    </ul>
  );
};
export default FriendList;
