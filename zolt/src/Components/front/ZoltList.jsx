import { useContext } from "react";
import Zolt from "./Zolt";
import FrontContext from "./FrontContext";

function TreeList() {

    const {zolts} = useContext(FrontContext);

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>List of zolts</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                    zolts ? zolts.map(zolt => <Zolt key={zolt.id} zolt={zolt}></Zolt>) : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default TreeList;