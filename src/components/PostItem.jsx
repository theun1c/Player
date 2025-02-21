import React from "react";
import MyButton from "./UI/Button/MyButton";

function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <div className="post__btn">
                <MyButton>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;
