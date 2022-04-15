import React from 'react';

import userCss from "./User.module.css"

const User = ({user, setUser}) => {
    const {id, name} = user;

    return (
        <div className={userCss.btn}>
            <span>{id}. {name}</span>
            <button onClick={() => setUser(user)}>Get User Details</button>
        </div>
    );
};

export {User};
