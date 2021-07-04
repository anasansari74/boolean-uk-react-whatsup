export default function Login({ users, login }) {
  return users.map((user) => (
    <li key={user.id}>
      <button
        onClick={() => {
          login(user.id);
        }}
        className="user-selection"
      >
        <img
          className="avatar"
          width="50"
          height="50"
          src={user.avatar}
          alt=""
        />
        <h3>{user.firstName + " " + user.lastName}</h3>
      </button>
    </li>
  ));
}
