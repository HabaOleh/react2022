import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import {User} from "../../components";
import css from "./UserPage.module.css"

const UsersPage = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data));
    },[])

    return (
        <div className={css.userWrap}>
            <div>{users.map(user=><User key={user.id} user={user}/>)}</div>
            <div className={css.right}><Outlet/></div>
        </div>
    );
};

export {UsersPage};
