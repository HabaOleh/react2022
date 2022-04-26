import {useReducer} from "react";

import {Cat, Form} from "./components";
import {Dog} from "./components";

const reducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case "addCat":
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
        case "deleteCat":
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
        case "addDog":
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
        case "deleteDog":
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
        default:
            return state;
    }

}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div>
            <Form dispatch={dispatch}/>
            <hr/>
            <div>
                Cats:
                {
                    state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)
                }
            </div>
            <div>
                Dogs:
                {
                    state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)
                }
            </div>
        </div>
    );
}

export default App;
