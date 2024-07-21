import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/Profile/FriendList/FriendList";
import friends from "./components/Profile/FriendList/friends.json";

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
    </div>
  );
}

export default App;