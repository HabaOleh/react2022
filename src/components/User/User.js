import React from 'react';
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>{id}.) {name}<Button to={id.toString()} state={user}>Get User Details</Button></div>
        </div>
    );
};

export {User};
