import { useState } from "react";
import { useContext } from "react";
import FrontContext from "./FrontContext";

function Tree({ tree }) {

    const { setCreateComment, setRateNow } = useContext(FrontContext);

    const [com, setCom] = useState('');
    
    const [rate, setRate] = useState('5')
    const rateIt = e =>{
        setRate(e.target.value)
        setRateNow({
            rate:parseInt(e.target.value),
            id:tree.id
        });

    }

    const handleComment = () => {
        setCreateComment({com, treeId: tree.id});
        setCom('');
    }


    return (
        <li className="list-group-item">
            <div className="item-front">
                <div className="content">
                    <b>{tree.title}</b>
                    <span>{['Leaf', 'Spike', 'Palm'][tree.type - 1]}</span>
                    <i>{tree.height.toFixed(2)} m</i>
                    <u>{tree.good}</u>
                    <i>
                        {
                            tree.rate_sum?'rate : '+(tree.rate_sum / tree.rates).toFixed(2):'no rates yet'
                        }
                    </i>
                </div>
                <div className="form-group mt-3">
                    <label className="mr-2">rate It</label>
                    <select value={rate} onChange={rateIt}>
                        {
                            [...Array(10)].map((_,i)=><option key={i} value={10-i}>{10-i}</option>)
                        }
                    </select>
                    </div>
                <ul className="list-group mt-2">
                    {
                    tree.coms ? tree.coms.slice(0, -5).split('-^o^-,').map((c, i) => <li className="list-group-item" key={i}>{c}</li>) : null
                    }
                </ul>
                <div className="form-group mt-3">
                    <textarea className="form-control" value={com} onChange={e => setCom(e.target.value)} rows="3"></textarea>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleComment}>I want to say</button>
                </div>
            </div>
        </li>
    );
}

export default Tree;