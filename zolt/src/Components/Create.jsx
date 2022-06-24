import { useContext } from "react";
import { useState } from "react";
import ZoltContext from "./ZoltContext";
import date from "./date";
import stringGen from "./sringgen";

function Create() {
  const { setCreateData, disableCreate, setDisableCreate,goods} =
    useContext(ZoltContext);

  // const [id, setId] = useState("");
  const [status, setStatus] = useState("0");
  const [lastTime, setLastTime] = useState(date);
  const [totalKm, setTotalKm] = useState(parseFloat(0));
  const [name, setName] = useState(stringGen(8));
  const [type, setType] = useState("1");
  const [place, setPlace] = useState("Gamykla");
  const [good, setGood] = useState("0")

  const handleCreate = () => {
    setDisableCreate(true);
    const data = {
      // id,
      status,
      lastTime,
      totalKm: parseFloat(totalKm),
      name,
      type,
      place,
      good
    };
    setCreateData(data);
    // setId("");
    setStatus("0");
    setLastTime(date);
    setTotalKm(0);
    setName(stringGen(8));
    setType("1");
    setPlace("Gamykla");
    setGood('0');
  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Create new COLT</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label>Regstraton code</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <small className="form-text text-muted">registration Code</small>
        </div>
        <div className="form-group">
          <label>Rida</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTotalKm(e.target.value)}
            value={parseFloat(totalKm)}
          />
          <small className="form-text text-muted">Enter Rida here.</small>
        </div>
        <div className="form-group">
          <label>Created/used</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLastTime(e.target.value)}
            value={lastTime}
          />
          <small className="form-text text-muted">
            Enter day/month/year here.
          </small>
        </div>
        <div className="form-group">
                    <label>Rentables</label>
                    <select className="form-control" onChange={e => setGood(e.target.value)} value={good}>
                        <option value="0" disabled>Select Goods</option>
                        {
                            goods ? goods.map(g => <option key={g.id} value={g.id}>{g.title}</option>) : null
                        }
                    </select>
                    <small className="form-text text-muted">Select Rentable</small>
                </div>
        <div className="form-group">
          <label>Place</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPlace(e.target.value)}
            value={place}
          />
          <small className="form-text text-muted">Enter location here.</small>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary with-loader"
          onClick={handleCreate}
          disabled={disableCreate}
        >
          <span className="spinner-border spinner-border-sm mr-2"></span>
          <span className="spinner-text">Create</span>
        </button>
      </div>
    </div>
  );
}

export default Create;
