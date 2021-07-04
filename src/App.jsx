import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useHistory } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [conversations, setConversations] = useState([]);

  // function currentUser() {
  //   users.find((user) => user.id === selectedUserId);
  //   return user;
  // }

  const currentUser = users.find((user) => user.id === selectedUserId);

  function login(userId) {
    setSelectedUserId(userId);
  }

  function logout(userId) {
    setSelectedUserId(null);
  }

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((user) => setUsers(user));
  }, [setUsers]);

  useEffect(() => {
    if (!selectedUserId) {
      setConversations([]);
      history.push("/login");
    } else {
      fetch(`http://localhost:4000/conversations?userId=${selectedUserId}`)
        .then((resp) => resp.json())
        .then((conversation) => setConversations(conversation));
      history.push("/logged-in");
    }
  }, [selectedUserId, history]);

  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <LoginPage users={users} login={login} />
        </Route>
        <Route path="/logged-in">
          <MainPage
            users={users}
            currentUser={currentUser}
            selectedUserId={selectedUserId}
            logout={logout}
            conversations={conversations}
          />
        </Route>
        <Route>
          <h1 style={{ padding: 200 }}>Page NOT found!</h1>
        </Route>
      </Switch>
    </div>
  );
}
