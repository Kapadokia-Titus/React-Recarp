import { useMemo } from "react";

export default function UploadForm({inputs, isVisible, handleOnChange, handleOnSubmit}) {

    const isDisabled = useMemo(()=>{
        // if any value in the input object is null, return true
        return !!Object.values(inputs).some(input => !input)
    }, [inputs])
  return (
   isVisible && <>
    <p className="display-6 text-center mb-3">Upload Stock Image</p>
    <div className="mb-5 d-flex align-items-center justify-content-center">
    <form className="mb-2" style={{textAlign:'left'}} onSubmit={handleOnSubmit}>
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
      <button type="submit" className="btn btn-success float-end" disabled={isDisabled}>
        Save Changes
      </button>
    </form>
    </div>
    </>
  );
}
