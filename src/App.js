import React, {useState} from "react";

import {FullUser, Users, Posts} from "./components";
import css from "./App.module.css"

function App() {
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    return (
        <div>
            <div className={css.usersAndInfo}>
                <Users setUser={setUser}/>
                {
                    user && <FullUser key={user.id} user={user} setUserPosts={setUserPosts}/>
                }
            </div>
            <Posts userId={userPosts}/>
        </div>
    );
}

export default App;
