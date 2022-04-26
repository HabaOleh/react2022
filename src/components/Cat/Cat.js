import React from 'react';

const Cat = ({cat,dispatch}) => {
    return (
        <div>
            {cat.name}
            <button onClick={() => dispatch({ type: 'deleteCat', payload: cat.id })}>delete</button>
        </div>
    );
};

export {Cat};
