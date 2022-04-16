import React from 'react';
import {Outlet,NavLink,useNavigate} from "react-router-dom"

import css from "./MainLayout.module.css"

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to={"home"}>Home</NavLink>
                <NavLink to={"users"}>Users</NavLink>
                <NavLink to={"posts"}>Posts</NavLink>
                <NavLink to={"comments"}>Comments</NavLink>
            </div>
            <div>
                <button onClick={()=>navigate(-1)}>Prev</button>
                <button onClick={()=>navigate(1)}>Next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
