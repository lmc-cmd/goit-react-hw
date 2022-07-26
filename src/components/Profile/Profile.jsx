import PropTypes from 'prop-types'
import styles from './Profile.module.css'

const Profile = props => {
  return (
    <div className="profile">
      <div className={styles['description']}>
        <img src={props.avatar} alt="User avatar" className={styles["avatar"]} />
        <p className={styles["name"]}>{props.username}</p>
        <p className={styles["tag"]}>@{props.tag}</p>
        <p className={styles["location"]}>{props.location}</p>
      </div>
      <ul className={styles["stats"]}>
        <li className={styles["stats-item"]}>
          <span className={styles["label"]}>Followers</span>
          <span className={styles["quantity"]}>
            <br /> {props.stats.followers}
          </span>
        </li>
        <li className={styles["stats-item"]}>
          <span className={styles["label"]}>Views</span>
          <span className={styles["quantity"]}>
            <br /> {props.stats.views}
          </span>
        </li>
        <li className={styles["stats-item"]}>
          <span className={styles["label"]}>Likes</span>
          <span className={styles["quantity"]}>
            <br /> {props.stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired

}
export default Profile;
