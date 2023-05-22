 import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

export default function Layout({children,state,onChange, onSubmit, toggle}) {
    return(
        <>
        <Navbar />
        <div class="container mt-5">
          <button className="btn btn-success float-end" onClick={()=>toggle(!state.isCollapsed)}>
            {state.isCollapsed ? "Hide Form" : "+Add"}
          </button>
          <div className="clearfix mb-4"></div>
          <UploadForm
            inputs={state.inputs}
            isVisible={state.isCollapsed}
            handleOnChange={onChange}
            handleOnSubmit={onSubmit}
          />
          {children}
        </div>
      </>
    )
}