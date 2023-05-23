import { useContext, useEffect, useMemo } from "react";
import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { Context } from "./context";


function App() {

  // use the useContext hook to consume the stateful value
  const {state} = useContext(Context)


  // update count using a memoised value
  const count  = useMemo(()=>{
     return `you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`
  }, [state.items])


  
  return (
    <Layout>
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
