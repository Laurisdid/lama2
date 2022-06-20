import { useEffect, useState } from "react";
import coltReducer from "./Reducers/coltReducer";
import { useReducer } from "react";
import "./bootstrap.css";
import "./crud.scss";
import Create from "./Components/kolt/Create";
import List from "./Components/kolt/List";
import { create, edit, read, remove } from "./Functions/localStorage";
import Edit from "./Components/kolt/Edit";
import Stats from "./Components/kolt/Stats";
// import './App.scss';

// https://docs.google.com/document/d/18UPY3gFN-1xZ0okWMkFs8h2jESfgJDXKQ3-viMXBeS0/edit

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [exes, setExes] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [colts, dispachColt] = useReducer(coltReducer, []);

  
  useEffect(() => {
    colts.length >0 && setExes(colts)
  }, [colts])

  const sortkm = () => {
    const action = {
      type: "sortKm",
      payload: exes,

    };
    dispachColt(action);
  };
  const sortID = () => {
    const action = {
      type: "sortID",
      payload: exes,

    };
    dispachColt(action);
  };
  const reload = () => {
    const action = {
      type: "reload",
      payload: exes,
    };
    dispachColt(action);
  };
  useEffect(() => {
    setExes(read());
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="col-8">
            <button onClick={reload}>RR</button>
            <button onClick={sortID}>Sort id</button>
            <button onClick={sortkm}>Sort km</button>
            <List
              exes={exes}
              setDeleteData={setDeleteData}
              setModalData={setModalData}
            ></List>
          </div>
        </div>
      </div>
      <Edit
        setEditData={setEditData}
        modalData={modalData}
        setModalData={setModalData}
      ></Edit>

      <Stats
        exes={exes}
        modalData={modalData}
        setModalData={setModalData}
      ></Stats>
    </>
  );
}
export default App;
