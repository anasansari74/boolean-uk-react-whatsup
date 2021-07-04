import { Route } from "react-router";

import MessagesPage from "./MessagesPage";
import SideChatList from "./SideChatList";

export default function MainPage({
  users,
  currentUser,
  selectedUserId,
  logout,
  conversations,
}) {
  if (currentUser === undefined) return null;
  return (
    <div className="main-wrapper">
      {/* <!-- Side Panel --> */}
      <aside>
        {/* <!-- Side Header --> */}
        <header className="panel">
          <img
            className="avatar"
            width="50"
            height="50"
            src={currentUser.avatar}
            alt=""
          />
          <h3>
            {currentUser.firstName} {currentUser.lastName}
          </h3>
          <button onClick={logout}>LogOut!</button>
        </header>
        {/* <!-- Search form --> */}
        <form className="aside__search-container">
          <input
            type="search"
            name="messagesSearch"
            placeholder="Search chats"
            value=""
          />
        </form>

        <SideChatList
          users={users}
          selectedUserId={selectedUserId}
          conversations={conversations}
        />
      </aside>
      {/* <!-- Main Chat Section --> */}
      <main className="conversation">
        {/* <!-- Chat header --> */}
        <header className="panel"></header>

        <ul className="conversation__messages">
          <Route path="/logged-in/:chatId">
            <MessagesPage currentUser={currentUser} />
          </Route>
        </ul>

        {/* <!-- Message Box --> */}
        <footer>
          <form className="panel conversation__message-box">
            <input type="text" placeholder="Type a message" rows="1" value="" />
            <button type="submit">
              {/* <!-- This is the send button --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                ></path>
              </svg>
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
}
