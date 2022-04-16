import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";
import {CommentDetails} from "../../components";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [postComments,setPostComments] = useState([]);

    useEffect(()=>{
        postService.getPostComments(id).then(({data})=>setPostComments(data));
    },[id])
    return (
        <div>
            {
                postComments.map(comment=><CommentDetails key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {PostCommentsPage};
