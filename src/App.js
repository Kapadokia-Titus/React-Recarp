import { useEffect, useMemo, useReducer, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";

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
function App() {
  // use useReducer instead of useState, that r3eturns current state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    // the above is replaced by dispatcg
    dispatch({ type: "setItem" });
    // then set collapse to false
    toggle(!state.isCollapsed);
  };

  // update count using a memoised value
  const count  = useMemo(()=>{
     return `you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`
  }, [state.items])

  
  return (
    <Layout
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      toggle={toggle}
      state={state}
    >
      <h1 className="text-center">Gallery</h1>
      {count}
      <div className="row mt-2">
        {state.items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
