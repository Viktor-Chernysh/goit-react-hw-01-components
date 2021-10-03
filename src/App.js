import './App.css';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './components/Profile/user.json';
import statisticData from './components/Statistic/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

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
