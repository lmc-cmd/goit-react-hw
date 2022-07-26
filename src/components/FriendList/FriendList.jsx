import FriendListItem from 'components/FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types'

const FriendList = (props) => {
  return (
    <ul className={styles['friend-list']}>
      {props.friends.map(el => (
        <FriendListItem key={el.id} data={el} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}

export default FriendList;
