import React, {useState} from 'react';

const Form = ({dispatch}) => {
    const [cat, setCat] = useState('');
    const [dog, setDog] = useState('');
    const createCat = () => {
        dispatch({type: "addCat", payload: cat});
        setCat('');
    }
    const createDog = () => {
        dispatch({type: "addDog", payload: dog});
        setDog('');
    }
    return (
        <div>
            <label>Cat Name: <input type="text" onChange={({target}) => setCat(target.value)} value={cat}/></label>
            <button onClick={() => createCat()}>Add Cat</button>

            <label>Dog Name: <input type="text" onChange={({target}) => setDog(target.value)} value={dog}/></label>
            <button onClick={() => createDog()}>Add Dog</button>
        </div>
    );
};

export {Form};
