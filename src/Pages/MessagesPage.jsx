import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MessagesPage({ currentUser }) {
  const [messages, setMessages] = useState([]);

  const { chatId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/messages?conversationId=${chatId}`)
      .then((resp) => resp.json())
      .then((message) => setMessages(message));
  }, [chatId]);
  return (
    <>
      {messages.map((message) => (
        <li
          key={message.id}
          className={message.userId === currentUser.id ? "outgoing" : " "}
        >
          <p>{message.messageText}</p>
        </li>
      ))}
    </>
  );
}
