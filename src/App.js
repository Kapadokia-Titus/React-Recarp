import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";

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
    return{
      ...state.inputs,
      file: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    // method that saves files from a computer
    return{ ...state.inputs, title: e.target.value };
  }
};

// reducer funciton
function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items:[state.inputs, ...state.items]
      };
    case "setInputs":
      return {
        ...state,
        inputs:handleOnChange(state, action.payload.value)
      };
    case "collapse":
      return {
        ...state,
        isCollapsed:action.payload.bool
      };
    default : return state; 
  }
}
function App() {
  // use useReducer instead of useState, that r3eturns current state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState();

  const handleOnChange = (e) => dispatch({type: 'setInputs', payload: {value: e}})
  const toggle = (bool) => dispatch({type:"collapse", payload: {bool}});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    // the above is replaced by dispatcg
    dispatch({type:'setItem'})
    // then set collapse to false
    toggle(!state.isCollapsed);
  };


  useEffect(() => {
    setCount(`you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`);
  }, [state.items]);

  
  return (
    <>
      <Navbar />
      <div class="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {state.isCollapsed ? "Hide Form" : "+Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          inputs={state.inputs}
          isVisible={state.isCollapsed}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
        <h1>Gallery</h1>
        {count}
        <div className="row mt-2">
          {state.items?.map((photo) => (
            <Card src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
