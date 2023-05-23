import { async } from "@firebase/util";
import { createContext, useReducer } from "react";
import Firestore from "./handlers/firestore";

const {readDocs}= Firestore
export const Context = createContext();

const photos = [];

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
        items: action.payload.items,
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

const Provider = ({ children }) => {

    //onChange
  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });
    // readDocs
    const read = async ()=>{
      const items = await readDocs("stocks")
      dispatch({type: "setItem", payload:{ items }})
    }
 
  // use useReducer instead of useState, that returns current state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, handleOnChange,dispatch, read, toggle }}>{children}</Context.Provider>
  );
};
export default Provider;
