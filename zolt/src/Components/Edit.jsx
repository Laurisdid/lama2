import { useContext } from "react";
import { useEffect, useState } from "react";
import ZoltContext from "./ZoltContext";
import date from "./date";

function Edit() {
   const { modalData, setModalData, setEditData,goods } = useContext(ZoltContext);
   const [addKm,setAddKm]=useState();
//    const [id, setId] = useState('');
   const [status, setStatus] = useState('0');
   const [lastTime, setLastTime] = useState(date);
   const [totalKm, setTotalKm] = useState(0);
   const [name, setName] = useState('');
   const [type, setType] = useState('1');
   const [place, setPlace] = useState('Gamykla');
   const [good, setGood]=useState('0')

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setName(modalData.name);
        setLastTime(modalData.lastTime);
        setTotalKm(modalData.totalKm);
        setType(modalData.type);
         setStatus(modalData.status);
        setPlace(modalData.place);
        setGood(goods.filter(g=>modalData.good === g.title )[0]?.id??0);
    }, [modalData]);

    const handleEdit = () => {
        const data = { status,lastTime,totalKm,name, type,good, place,id: modalData.id};
        setEditData(data);
        setModalData(null);
        console.log(modalData);
    }

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">zolt Changer</h5>
                        <button type="button" className="close" onClick={() => setModalData(null)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>id</label>
                            <input type="text" className="form-control" readOnly value={modalData.id} />
                        </div>

                        <div className="form-group">
                            <label>Regstraton code</label>
                            <input type="text" className="form-control" readOnly value={name} />
                            <small className="form-text text-muted">registration Code.</small>
                        </div>
                        <div className="form-group">
                            <label>last date used/created</label>
                            <input type="text" className="form-control" readOnly value={lastTime} />
                        </div>
                        <div className="form-group">
                            <label>total km</label>
                            <input type="text" className="form-control" readOnly value={totalKm} />
                            <label>add km</label>
                            <input type="text" className="form-control" onChange={e => setAddKm(e.target.value)} value={addKm} />
                            <button type="button" className="btn btn-outline-primary" onClick={()=>setTotalKm(parseFloat(addKm)+parseFloat(totalKm))}>ADD</button>
                        </div>
                        <div className="form-group">
                            <label>is busy</label>
                            <input type="text" className="form-control" readOnly value={!Boolean(modalData.status)} />
                        </div>
                        <div className="form-group">
                            <label>Place</label>
                            <input type="text" className="form-control" onChange={e => setPlace(e.target.value)} value={place} />
                            <small className="form-text text-muted">Enter place here.</small>
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setModalData(null)}>Close</button>
                        <button type="button" className="btn btn-outline-primary" onClick={handleEdit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;