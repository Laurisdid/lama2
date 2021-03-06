import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import './crud.scss';
import './bootstrap.css'
import Create from "./Components/Create";
import List from "./Components/List";
import Edit from "./Components/Edit";
import ZoltContext from "./Components/ZoltContext";
import Message from "./Components/Message";
import GoodContext from "./Components/goods/GoodContext";
import CreateGoods from './Components/goods/Create'
import ListGoods from './Components/goods/List'

function Back() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());


  const [zolts, setZolts] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [goods, setGoods] = useState(null);
  const [createDataGoods, setCreateDataGoods] = useState(null);
  const [deleteDataGoods, setDeleteDataGoods] = useState(null);

  const [message, setMessage] = useState(null);
  const [disableCreate, setDisableCreate] = useState(false);

//////////// zolts////////////////
  //Read
  useEffect(() => {
    axios
      .get("http://localhost:3003/medziai")
      .then((res) => setZolts(res.data));
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) return;
    axios
      .post("http://localhost:3003/medziai", createData)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch((error) => {
        showMessage({ text: error.message, type: "danger" });
      })
      .then(() => {
        setDisableCreate(false);
      });
  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) return;
    axios
      .delete("http://localhost:3003/medziai/" + deleteData.id)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [deleteData]);
  // console.log=(x)=>alert(new String(x));
  // Edit
  useEffect(() => {
    if (null === editData) return;
    axios
      .put(`http://localhost:3003/medziai/${editData.id}`, editData)
      .catch((error) => {
        showMessage({ text: error.message, type: "danger" })
      })
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [editData]);


//////////goods/////////////
 // Create
 useEffect(() => {
  if (null === createDataGoods) return;
  axios
    .post("http://localhost:3003/rent", createDataGoods)
    .then(_=> {
      setLastUpdate(Date.now());
    })
  
}, [createDataGoods]);
 //Read
 useEffect(() => {
  axios
    .get("http://localhost:3003/rent")
    .then((res) => 
    setGoods(res.data)
    );
}, [lastUpdate]);

// Delete
useEffect(() => {
  if (null === deleteDataGoods) return;
  axios
    .delete("http://localhost:3003/rent/" + deleteDataGoods.id)
    .then((res) => {
      showMessage(res.data.msg);
      setLastUpdate(Date.now());
    });
}, [deleteDataGoods]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  };
  return (
    <ZoltContext.Provider
      value={{
        zolts,
        setCreateData,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
        message,
        disableCreate,
        setDisableCreate,
        goods
      }}
    >
      <GoodContext.Provider value={{
        setCreateData: setCreateDataGoods,  
        goods, 
        setDeleteData:setDeleteDataGoods
      }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
            <CreateGoods/>
            <ListGoods/>
          </div>
          <div className="col-8">
            <List></List>
          </div>
        </div>
      </div>
      <Edit />
      <Message />
      </GoodContext.Provider>
    </ZoltContext.Provider>
  );
}

export default Back;
