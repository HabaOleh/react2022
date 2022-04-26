import React from 'react';

const Dog = ({dog,dispatch}) => {
    return (
        <div>
            {dog.name}
            <button onClick={()=>dispatch({type:"deleteDog",payload:dog.id})}>delete</button>
        </div>
    );
};

export {Dog};
