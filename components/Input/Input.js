import React from "react";

import classes from "./Input.module.css";

const Input = ({ setMessage, sendMessage, message }) => {
  return (
    <form className={classes.form}>
      <input
        className={classes.input}
        type="text"
        placeholder="پیام خود را وارد کنید"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className={classes.sendButton} onClick={e => sendMessage(e)}>
        ارسال
      </button>
    </form>
  );
};

export default Input;
