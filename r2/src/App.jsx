import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import TreeContext from './Components/TreeContext';
import axios from 'axios';
import Message from './Components/Message';
import GoodContext from './Components/goods/GoodContext';

import CreateGoods from './Components/goods/Create';
import ListGoods from './Components/goods/List';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  ///Trees
  const [trees, setTrees] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  //Goods
  const [goods, setGoods] = useState(null);
  const [createDataGoods, setCreateDataGoods] = useState(null);
  const [deleteDataGoods, setDeleteDataGoods] = useState(null)


  const [message, setMessage] = useState(null);
  const [disableCreate, setDisableCreate] = useState(false);

  //////////////////TREES?/////////////////////////////
  //Read
  useEffect(() => {
    axios.get('http://localhost:3003/medziai')
      .then(res => setTrees(res.data));
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) return;
    axios.post('http://localhost:3003/medziai', createData)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
      .then(() => {
        setDisableCreate(false);
      })


  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost:3003/medziai/' + deleteData.id)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) return;
    axios.put('http://localhost:3003/medziai/' + editData.id, editData)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [editData]);

  //////////////GOODS//////////////////////


  // Create
  useEffect(() => {
    if (null === createDataGoods) return;
    axios.post('http://localhost:3003/gerybes', createDataGoods)
      .then(_ => {
        setLastUpdate(Date.now());
      })
  }, [createDataGoods]);

  // Read
  useEffect(() => {
    axios.get('http://localhost:3003/gerybes')
      .then(res => setGoods(res.data));
  }, [lastUpdate]);



// Delete
useEffect(() => {
  if (null === deleteDataGoods) return;
  axios.delete('http://localhost:3003/gerybes/' + deleteDataGoods.id)
    .then(res => {
      showMessage(res.data.msg);
      setLastUpdate(Date.now());
    });
}, [deleteDataGoods]);







  const showMessage = msg => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  }


  return (
    <TreeContext.Provider value={
      {
        trees,
        setCreateData,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
        message,
        disableCreate,
        setDisableCreate,
        goods
      }
    }>
      <GoodContext.Provider value={{
        setCreateData: setCreateDataGoods,goods,
        setDeleteData:setDeleteDataGoods
        
      }}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Create />
              <CreateGoods />
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
    </TreeContext.Provider>
  );


}
export default App;