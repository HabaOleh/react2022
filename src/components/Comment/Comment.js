import React from 'react';
import {Button} from "../Button/Button";

const Comment = ({comment}) => {
    const {id,name}=comment;
    return (
        <div>
            {id}.) {name} <Button to={id.toString()} state={comment}>Get Details</Button>
        </div>
    );
};

export {Comment};
