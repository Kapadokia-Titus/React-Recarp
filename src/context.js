import { createContext, useReducer } from "react";

export const Context = createContext()

const photos = [
];

// set initial state
const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

// imputs handler
const handleOnChange = (state, e) => {
  if (e.target.name === "file") {
    // method that saves files from a computer
    return {
      ...state.inputs,
      file: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    // method that saves files from a computer
    return { ...state.inputs, title: e.target.value };
  }
};

// reducer funciton
function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [state.inputs, ...state.items],
        count: state.items.length +1 ,
        inputs:{ title: null, file: null, path: null },
      };
    case "setInputs":
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value),
      };
    case "collapse":
      return {
        ...state,
        isCollapsed: action.payload.bool,
      };
    default:
      return state;
  }
}
 
const Provider =({children}) =>{ 
    // use useReducer instead of useState, that returns current state and dispatch
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}
export default Provider; 