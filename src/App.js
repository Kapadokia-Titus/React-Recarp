import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";

const photos =[
  'https://picsum.photos/id/1001/200',
  'https://picsum.photos/id/1002/200',
  'https://picsum.photos/id/1003/200',
  'https://picsum.photos/id/1004/200',
  'https://picsum.photos/id/1005/200'
]

function App() {
const [items, setItems] = useState(photos); 
const [isCollapsed, collapse] = useState(false); 

const toggle = ()=> collapse(!isCollapsed);
  return (
    <>
      <Navbar />
      <div class="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>{isCollapsed? 'Hide Form':'+Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm isVisible={isCollapsed}/>
        <h1>Gallery</h1>
        <div className="row">
             {items.map((photo)=><Card src={photo} />)} 
        </div>
      </div>
    </>
  );
}

export default App;
