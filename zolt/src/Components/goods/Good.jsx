import { useContext } from "react";
import GoodContext from "./GoodContext";

function Good({ good }) {

    const { setDeleteData } = useContext(GoodContext);

    const handleDelete = () => {
        setDeleteData(good);
    }



    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    
                    <b>{good.title}   {good.TotalModules ? '(' + good.TotalModules + ')' : <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>}</b>
                </div>
            </div>
        </li>
    );
}

export default Good;