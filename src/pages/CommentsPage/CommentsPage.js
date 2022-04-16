import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {commentsService} from "../../services";
import {Comment} from "../../components";
import css from "./CommentPage.module.css"

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    }, [])

    return (
        <div className={css.commentWrap}>
            <div>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
            <div className={css.right}><Outlet/></div>
        </div>
    );
};

export {CommentsPage};
