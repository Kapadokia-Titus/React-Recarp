import { useContext, useMemo } from "react";
import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { Context } from "./context";


function App() {

  // use the useContext hook to consume the stateful value
  const {dispatch, state} = useContext(Context)

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
