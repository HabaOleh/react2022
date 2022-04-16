import React from 'react';

import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div>
            <div>{id}.)  {title}<Button to={id.toString()} state={post}>Get Datails</Button></div>
        </div>
    );
};

export {Post};
