import React, { useEffect, useRef } from "react";
import ScrollToBottom, { useScrollToBottom } from "react-scroll-to-bottom";
import classes from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = ({ messages, currentUser }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current &&
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div
      className={classes.messages}
      // followButtonClassName={classes.scrollBtn}
    >
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} currentUser={currentUser} />
          <div ref={messagesEndRef}></div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
