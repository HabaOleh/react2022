import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services";
import {PostDetails} from "../../components";

const UserPostsPage = () => {
    const {userId} = useParams();
    const [userPosts,setUserPosts] = useState([]);

    useEffect(()=>{
        userService.getUserPosts(userId).then(({data})=>setUserPosts(data))
    },[userId])

    return (
        <div>
            {userPosts.map(post=><PostDetails key={post.id} post={post} flag={userId}/>)}
        </div>
    );
};

export {UserPostsPage};
