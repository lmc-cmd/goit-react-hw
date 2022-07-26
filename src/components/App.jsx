import styles from './App.module.css'
import Profile from '../components/Profile/Profile.jsx';
import Statistics from '../components/Statistics/Statistics.jsx';
import user from '../data/user.json';
import data from '../data/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div className={styles["main-container"]} >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics
        title="Upload stats"
        stats={data} />
      <Statistics stats={data} />

      <FriendList
        friends={friends} />
      
      <TransactionHistory
        transactions={transactions} />
    </div>
  );
};
