import React from 'react';

const CommentDetails = ({comment}) => {
    const {id,postId,name,email,body} = comment;
    return (
        <div>
                <div>id :{id}</div>
                <div>postId :{postId}</div>
                <div>name :{name}</div>
                <div>email :{email}</div>
                <div>body :{body}</div>
            <hr/>
        </div>
    );
};

export {CommentDetails};
