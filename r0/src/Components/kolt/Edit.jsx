import { useEffect, useState } from "react";
import getId from "../../Functions/getId";
import date from "../../Functions/date";

function Edit({ modalData, setModalData, setEditData }) {


    const [addKm,setAddKm]=useState();
    const [id, setId] = useState('');
    const [status, setStatus] = useState('0');
    const [lastTime, setLastTime] = useState(date);
    const [totalKm, setTotalKm] = useState(0);
    const [name, setName] = useState('');
    const [type, setType] = useState('1');
    const [place, setPlace] = useState('Gamykla');

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setId(modalData.id);
        setStatus(modalData.status);
        setLastTime(modalData.lastTime);
        setTotalKm(modalData.totalKm);
        setName(modalData.name);
        setType(modalData.type);
        setPlace(modalData.place);
    }, [modalData]);

    const handleEdit = () => {
        const data = { id,status,lastTime,totalKm,name, type, place, id: modalData.id };
        setEditData(data);
        setModalData(null);
    }

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ex Changer</h5>
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