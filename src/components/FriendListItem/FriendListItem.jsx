// import PropTypes from 'prop-types'
import styles from './FriendListItem.module.css';
const FriendListItem = props => {
  return (
    <li className={styles['item']}>
      <span
        className={styles['status']}
        style={
          props.data.isOnline === true
            ? {
                backgroundColor: 'green',
              }
            : {
                backgroundColor: 'red',
              }
        }
      >
        {props.data.isOnline}
      </span>
      <img
        className="avatar"
        src={props.data.avatar}
        alt="User avatar"
        width="48"
      />
      <p
        className="name"
        style={{
          display: 'flex',
        }}
      >
        {props.data.name}
      </p>
    </li>
  );
};
export default FriendListItem;

// FriendListItem.propTypes = {

// }
