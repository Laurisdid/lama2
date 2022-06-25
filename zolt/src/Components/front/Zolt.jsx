import { useContext, useState } from "react";
import FrontContext from "./FrontContext";

function Zolt({zolt}) {

    const { setCreateComment } = useContext(FrontContext);

    const [com, setCom] = useState('');

    const handleComment = () => {
        setCreateComment({com, zoltId: zolt.id});
        setCom('');
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
                <b style={{collor: "red"}}>{zolt.good}</b>
              {/* <b>{zolt.type}</b> */}
            </div>
            <textarea value={com} onChange={e=>setCom(e.target.value)}></textarea>
            <div className="buttons">
                <button type="button" className="btn btn-outline-success ml-2" onClick={handleComment}>Add Comment</button>
             
            </div></div>
            <div>
                {
                zolt.coms? zolt.coms.slice(0,-5).split('-^o^-').map((c,i)=><li key={i}>{c}</li>):null
                }
            </div>
        
    </li>
    );
}

export default Zolt;