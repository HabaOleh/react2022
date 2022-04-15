import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h3>{id}. {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {Post};
