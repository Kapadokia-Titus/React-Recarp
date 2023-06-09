import { useContext, useMemo } from "react";
import { Context } from "../context";
import Firestore from "../handlers/firestore";

const {writeDoc} = Firestore

// a function that allows us to preview data
function Preview({ path }) {
  return (
    // do conditional rendering if only there is an existing image in path
    path && <div
      className="rounded p-1 m-5"
      style={{
        width: "30%",
        height: "300px",
        backgroundImage: `url(${path})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default function UploadForm() {
  // create a context
  const {state, handleOnChange, dispatch } = useContext(Context)
  const handleOnSubmit = (e) => {
    e.preventDefault();
    writeDoc(state.inputs, "stock").then(console.log)
    // setItems([inputs.path, ...items]);
    // the above is replaced by dispatcg
    dispatch({ type: "setItem" });
    // then set collapse to false
    dispatch({type:"collapse", payload: !state.isCollapsed});
  };


  const isDisabled = useMemo(() => {
    // if any value in the input object is null, return true
    return !!Object.values(state.inputs).some((input) => !input);
  }, [state.inputs]);
  return (
    state.isCollapsed && (
      <>
        <p className="display-6 text-center mb-3">Upload Stock Image</p>
        <div className="mb-5 d-flex align-items-center justify-content-center">
          <Preview {...state.inputs} />
          <form
            className="mb-2"
            style={{ textAlign: "left" }}
            onSubmit={handleOnSubmit}
          >
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="title"
                onChange={handleOnChange}
                id="title"
                aria-describedby="text"
              />
            </div>
            <div className=" form-group mb-3">
              <input
                type="file"
                className="form-control"
                onChange={handleOnChange}
                name="file"
              />
            </div>
            <button
              type="submit"
              className="btn btn-success float-end"
              disabled={isDisabled}
            >
              Save Changes
            </button>
          </form>
        </div>
      </>
    )
  );
}
