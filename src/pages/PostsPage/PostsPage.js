import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import css from "./PostPage.module.css"

const PostsPage = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
            postService.getAll().then(({data})=>setPosts(data));
    },[])

    return (
        <div className={css.wrap}>
            <div>{posts.map(post=><Post key ={post.id} post={post}/>)}</div>
            <div className={css.right}><Outlet/></div>
        </div>
    );
};

export {PostsPage};
