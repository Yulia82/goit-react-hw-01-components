import user from "./components/sourse-data/user.json";
import { Profile } from "./components/profile/Profile";

import statistical from "./components/sourse-data/statistical-data.json";
import { Statistics } from "./components/statistics/Statistics";

import { FriendList } from "./components/friendList/FriendList";
import friends from "./components/sourse-data/friends.json";

import { TransactionHistory } from "./components/transaction/TransactionHistory";
import transactions from "./components/sourse-data/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistical} />
      <Statistics stats={statistical} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
