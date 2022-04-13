import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.posts__item}>
            <img className={classes.posts__item__image}
                 src="https://avatarko.ru/img/kartinka/20/multfilm_19761.jpg"
                 alt=""/>
            <div className={classes.posts__item_messages}>
                {props.massage}
            </div>
            <div className={classes.posts__item_likes}>
                <span>like: {props.likes}</span>
            </div>
        </div>
    )
}

export default Post;