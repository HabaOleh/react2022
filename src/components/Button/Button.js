import React from 'react';
import {Link} from "react-router-dom";

const Button = ({to,state,children,...args}) => {
    return (
        <Link to={to} state={state}><button {...args}>{children}</button></Link>

    );
};

export {Button};
