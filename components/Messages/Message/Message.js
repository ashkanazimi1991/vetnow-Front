import React from "react";
import classes from "./Message.module.css";

const Message = ({ message: { text, user }, currentUser }) => {
  let isSentByCurrentUser = false;
  if (user._id === currentUser._id) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className={[classes.messageContainer, classes.justifyEnd].join(" ")}>
      <div className={[classes.messageBox, classes.backgroundBlue].join(" ")}>
        <p className={[classes.messageText, classes.colorWhite].join(" ")}>
          {text}
        </p>
      </div>
    </div>
  ) : (
    <div className={[classes.messageContainer, classes.justifyStart].join(" ")}>
      <p className={[classes.sentText, classes.pr - 10].join(" ")}>
        {user.name ? user.name : user.phone}
      </p>
      <div className={[classes.messageBox, classes.backgroundLight].join(" ")}>
        <p className={[classes.messageText, classes.colorDark].join(" ")}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Message;
