import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = (props) => {

    let postsElements = props.state.profilePage.posts.map(el => {
        return (
            <Post massage={el.message} likes={el.likes}/>
        )
    });

    let addNewPost = () => {
        alert('eeee');
    }

    return (
        <div className={classes.posts__container}>
            <h3 className={classes.posts__container_title}>My posts</h3>
            <div className={classes.posts__textarea}>
                <div>
                    <textarea>

                    </textarea>
                </div>
                <button onClick={addNewPost}>Add posts</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;