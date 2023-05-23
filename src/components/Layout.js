 import { useContext } from "react";
import { Context } from "../context";
import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

export default function Layout({children}) {

    const {state, toggle} = useContext(Context)
    return(
        <>
        <Navbar />
        <div class="container mt-5">
          <button className="btn btn-success float-end" onClick={()=>toggle(!state.isCollapsed)}>
            {state.isCollapsed ? "Hide Form" : "+Add"}
          </button>
          <div className="clearfix mb-4"></div>
          <UploadForm/>
          {children}
        </div>
      </>
    )
}