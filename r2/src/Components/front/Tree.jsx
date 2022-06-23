import { useState } from "react";
import { useContext } from "react";
import FrontContext from "./FrontContext";

function Tree({ tree }) {

    const { setCreateConmment } = useContext(FrontContext);
    const [com, setCom] = useState('')
    const handleComment = () => {
setCreateConmment({com,treeId:tree.id})
setCom('')
    }

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{tree.title}</b>
                    <span>{['Leaf', 'Spike', 'Palm'][tree.type - 1]}</span>
                    <i>{tree.height}</i>
                    <b>.  {tree.good}</b>
                </div>
                <div class="form-group">
                    <label >your comment</label>
                    <textarea class="form-control" value={com} onChange={e => setCom(e.target.value)}></textarea>
                </div>

                <div className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleComment}>Add comment</button>
                </div>
            </div>
        </li>
    );
}

export default Tree;