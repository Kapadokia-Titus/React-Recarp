import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";

const photos = [
  "https://picsum.photos/id/1001/200",
  "https://picsum.photos/id/1002/200",
  "https://picsum.photos/id/1003/200",
  "https://picsum.photos/id/1004/200",
  "https://picsum.photos/id/1005/200",
];

function App() {
  const [count, setCount] = useState(); 
  const [inputs, setInputs] = useState({title:null, file:null, path:null});
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const handleOnChange = (e) => {
    if(e.target.name==='file'){
 // method that saves files from a computer
      setInputs({...inputs, file:e.target.files[0], path: URL.createObjectURL(e.target.files[0])})
    }else {// method that saves files from a computer
      setInputs({...inputs,title:e.target.value})
    }
   
  };
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    setItems([inputs.path,...items])
    // clear input after submit
    setInputs({title:null, file:null, path:null})
    // then set collapse to false
    collapse(false)
  } ;

  useEffect(()=>{
    setCount(`you have ${items.length} image${items.length > 1? "s":""}`)
  },[items])

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
          {items?.map((photo) => (
            <Card src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
