import React, {useEffect, useState} from 'react';
import {useLocation, useParams,Outlet} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {state} = useLocation();
    const {userId} = useParams();
    const [user,setUser] = useState(state);

    useEffect(()=>{
        if(!state){
            userService.getById(userId).then(({data})=>setUser(data));
        }else{
            setUser(state);
        }
    },[userId,state])

    return (
        <div>
            <div>{user && <UserDetails key={user.id} user={user}/>}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {SingleUserPage};
