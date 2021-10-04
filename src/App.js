import './App.css';
import Profile from './components/Profile';
import Statistic from './components/Statistic';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './data/social-profile/user.json';
import statisticData from './data/statistics/statistical-data.json';
import friends from './data/friend-list/friends.json';
import transactions from './data/transaction-history/transactions.json';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic data={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
