import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const photos =[
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200'
]

function App() {

  return (
    <>
      <Navbar />
      <div class="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
             {photos.map((photo)=><Card src={photo} />)} 
        </div>
      </div>
    </>
  );
}

export default App;
