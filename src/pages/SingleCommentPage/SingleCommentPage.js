import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {commentsService} from "../../services";
import {CommentDetails} from "../../components";

const SingleCommentPage = () => {
    const {commentId} = useParams();
    const {state} = useLocation();
    const [comment,setComment] = useState(state);

    useEffect(()=>{
        if(!state){
            commentsService.getById(commentId).then(({data})=>setComment(data));
        }else{
            setComment(state);
        }
    },[commentId,state])

    return (
        <div>
            {
                comment && <CommentDetails key={commentId} comment={comment}/>
            }
        </div>
    );
};

export {SingleCommentPage};
