import { Link } from "react-router-dom";

export default function SideChatList({ users, conversations, selectedUserId }) {
  const contacts = users.filter((user) => user.id !== selectedUserId);

  if (conversations.length === 0) return <h1>Loading...</h1>;

  return (
    <ul>
      {/* <!-- This first item should always be present --> */}
      <li>
        <button className="chat-button">
          <div>
            <h3>+ Start a new Chat</h3>
          </div>
        </button>
      </li>
      {/* <!--  --> */}
      {contacts.map((user) => {
        const conversation = conversations.find(
          (conversation) =>
            conversation.userId === user.id ||
            conversation.participantId === user.id
        );

        return (
          <li>
            <button className="chat-button">
              <Link to={`/logged-in/${conversation.id}`}>
                <img
                  className="avatar"
                  height="50"
                  width="50"
                  alt=""
                  src={user.avatar}
                />
                <div>
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  <p>Last message</p>
                </div>
              </Link>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
