import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/Profile/FriendList/FriendList";
import friends from "./components/Profile/FriendList/friends.json";
import TransactionHistory from "./components/Profile/TransactionHistory/TransactionHistory";
import transaction from "./components/Profile/TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
