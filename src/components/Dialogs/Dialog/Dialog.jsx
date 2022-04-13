import React from "react";
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>
                <div className={classes.dialog__image}>
                    <img src="https://avatarko.ru/img/kartinka/20/multfilm_19761.jpg" alt=""/>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default Dialog;