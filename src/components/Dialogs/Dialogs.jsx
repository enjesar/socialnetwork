import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map(el => {
        return (
            <Dialog id={el.id} name={el.name}/>
        )
    })

    let messagesElements = props.state.dialogsPage.messages.map(el => {
        return (
            <Message message={el.message}/>
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__title}>
                <h3>Dialogs</h3>
            </div>
            <div className={classes.dialogs__container}>
                <div className={classes.dialogs__persons}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;