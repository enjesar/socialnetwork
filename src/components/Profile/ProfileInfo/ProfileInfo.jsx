import classes from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = () => {
    return (
        <div className={classes.profile__information}>
            <div>
                <img className={classes.profile__information__image}
                     src="https://avatarko.ru/img/kartinka/20/multfilm_19761.jpg" alt=""/>
            </div>
            <div className={classes.profile__information__description}>
                <div className={classes.profile__information__description_item}>
                    Oleg Nicolaev
                </div>
                <div className={classes.profile__information__description_item}>
                    32 age
                </div>
                <div className={classes.profile__information__description_item}>
                    working
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;