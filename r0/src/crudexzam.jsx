import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss';
import Create from './Components/crud/Create';
import List from './Components/crud/List';
import { create, edit, read, remove } from './Functions/localStorage';
import Edit from './Components/crud/Edit';
// import './App.scss';



function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [exes, setExes] = useState(null);
    const [modalData, setModalData] = useState(null);

    const [createData, setCreateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editData, setEditData] = useState(null);

    //Read
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
                        <List exes={exes} setDeleteData={setDeleteData} setModalData={setModalData}></List>
                    </div>
                </div>
            </div>
            <Edit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
        </>
    );


}
export default App;