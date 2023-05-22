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

// reducer funciton
function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items:[action.payload.path, ...state.items]
      };
    default : return state; 
  }
}
function App() {
  // use useReducer instead of useState, that r3eturns current state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState();
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.name === "file") {
      // method that saves files from a computer
      setInputs({
        ...inputs,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      // method that saves files from a computer
      setInputs({ ...inputs, title: e.target.value });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    // the above is replaced by dispatcg
    dispatch({type:'setItem', payload:{path : inputs}})
    // clear input after submit
    setInputs({ title: null, file: null, path: null });
    // then set collapse to false
    collapse(false);
  };

  // to handle the reducer hook
  useEffect(() => {
    console.log(state);
  });

  useEffect(() => {
    setCount(`you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`);
  }, [state.items]);

  const toggle = () => collapse(!isCollapsed);
  return (
    <>
      <Navbar />
      <div class="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Hide Form" : "+Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          inputs={inputs}
          isVisible={isCollapsed}
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
