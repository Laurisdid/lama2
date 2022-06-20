import { useContext } from "react";
import ZoltContext from "./ZoltContext";

function Zolt({zolt}) {

    const {setDeleteData, setModalData} = useContext(ZoltContext);

    const handleDelete = () => {
        setDeleteData(zolt);
    }

    const handleEdit = () => {
        console.log(zolt);
         setModalData(zolt);
    }

    return (
        <li className="list-group-item">
        <div className="item">
            <div className="content">
                <b>{zolt.id}</b>
                <b>{zolt.name}</b>
                <b>{zolt.lastTime}</b>
                <b>{zolt.totalKm}</b>
                <b>{zolt.status}</b>
                <b>{zolt.place}</b>
              {/* <b>{zolt.type}</b> */}
            </div>
            <div className="buttons">
                <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
                <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </li>
    );
}

export default Zolt;