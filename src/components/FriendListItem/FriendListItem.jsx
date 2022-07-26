import PropTypes from 'prop-types'
import styles from './FriendListItem.module.css';
const FriendListItem = props => {
  return (
    <li className={styles['item']}>
      <span
        className={styles['status']}
        style={
          props.data.isOnline
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      >
        {props.data.isOnline}
      </span>
      <img
        className={styles['avatar']}
        src={props.data.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles['name']}>{props.data.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default FriendListItem;