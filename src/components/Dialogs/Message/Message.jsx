import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={classes.messages__item}>
            <div className={classes.messages__item_image}>
                <img src="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg" alt=""/>
            </div>
            <div className={classes.messages__item_text}>
                {props.message}
            </div>            
        </div>
    )
}

export default Message;