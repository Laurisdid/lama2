import { useState } from "react";
import Ex from "./Ex";

function List({ exes, setDeleteData, setModalData }) {
    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        id: {
            method: (a, b) => {
                if (a.id > b.id) return 1;
                if (b.id > a.id) return -1;
                return 0
            }
        },
        km: {
            method: (a, b) => {
                if (a.totalKm > b.totalKm) return 1;
                if (b.totalKm > a.totalKm) return -1;
                return 0
            }
        }
    };
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>List of COLT</h2>

            </div>
            <div className="card-body">
                <ul className="list-group">
                    <div>  <li className="list-group-item">
                        <div className="item">
                            <div className="content">
                                <b>id  .</b>
                                <b>   name   . </b>
                                <b> lastTime .</b>
                                <b>totalKm  .</b>
                                <b>status  .</b>
                                <b>place  .</b>
                            </div>
                            <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                                <option value="DEFAULT" disabled>None</option>
                                <option value="id">id</option>
                                <option value="km">km</option>
                            </select>
                        </div>
                    </li></div>
                    {
                        exes ? [...exes].sort(sortMethods[sortState].method).map(ex => <Ex
                            key={ex.id}
                            ex={ex}
                            setDeleteData={setDeleteData}
                            setModalData={setModalData}
                        ></Ex>) : null
                    }
                </ul>
                {/* <ul>
                     { exes ? exes.sort(sortMethods[sortState].method).map((el, i) => (
                        <li key={i}>{el}</li>
                    )):null}
                </ul> */}
            </div >
        </div >
    );
}

export default List;