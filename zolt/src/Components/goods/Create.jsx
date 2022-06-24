import { useContext } from "react";
import { useState } from "react";
import GoodContext from "./GoodContext";


function Create() {
  const { setCreateData, } =
    useContext(GoodContext);

  const [title, setTitile] = useState("0");

  const handleCreate = () => {
    const data = { title };
    setCreateData(data);
    setTitile("");
  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Create new Rentable</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitile(e.target.value)}
            value={title}
          />
        </div>

        <button
          type="button"
          className="btn btn-outline-primary with-loader"
          onClick={handleCreate}
        >
          <span className="spinner-border spinner-border-sm mr-2"></span>
          <span>Create</span>
        </button>
      </div>
    </div>
  );
}

export default Create;
