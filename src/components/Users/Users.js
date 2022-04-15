import React, {useEffect, useState} from 'react';

import {userService} from "../../servise";
import {User} from "../User";

const Users = ({setUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} setUser={setUser}/>)
            }
        </div>
    );
};

export {Users};
