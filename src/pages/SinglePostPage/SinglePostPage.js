import React, {useEffect, useState} from 'react';
import {useLocation, useParams,Outlet} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [post,setPost] = useState(state);


    useEffect(()=>{
        if(!state){
            postService.getById(id).then(({data})=>setPost(data));
        }else{
            setPost(state);
        }
    },[id,state])


    return (
        <div>
           <div> {post && <PostDetails key={post.id} post={post}/>}</div>
            <Outlet/>
        </div>

    );
};

export {SinglePostPage};
