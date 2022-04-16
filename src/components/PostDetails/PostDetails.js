import React from 'react';
import {Button} from "../Button/Button";

const PostDetails = ({post,flag}) => {
    const {id,userId,title,body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>{body}</div>
            {!flag && <Button to={"comments"}>Show Comments</Button>}
            <hr/>
        </div>
    );
};

export {PostDetails};
