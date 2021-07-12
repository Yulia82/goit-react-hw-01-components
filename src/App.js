import user from "./components/profile/user.json";
import { Profile } from "./components/profile/Profile";

import statistical from "./components/statistics/statistical-data.json";
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
        src={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistical} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
