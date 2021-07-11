import user from "./components/profile/user.json";
import { Profile } from "./components/profile/Profile";

import statistical from "./components/statistics/statistical-data.json";
import { StatisticList } from "./components/statistics/Statistic-list";
import { Statistics } from "./components/statistics/Statistics";

import { FriendList } from "./components/friendList/FriendList";
import friends from "./components/friendList/friends.json";

import { TransactionHistory } from "./components/transaction/TransactionHistory";
import transactions from "./components/transaction/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        src={user.avatar}
      />
      <>
        <Statistics title="Upload stats">
          <StatisticList stats={statistical} />
        </Statistics>
      </>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
