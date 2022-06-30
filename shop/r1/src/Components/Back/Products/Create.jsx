import { useContext } from "react";
import { useState } from "react";
import BackContext from "../BackContext";

function Create() {

    const { cats,setCreateCat } = useContext(BackContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [cat,setCat]=useState('0')
    const [inStock,setInStock]= useState(false)


    const handleCreate = () => {
        const data = { title,price:parseFloat(price),inStock: inStock?1:0,cat:parseInt(cat) };
        setCreateCat(data);
        setTitle('');
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Create new product</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                    <small className="form-text text-muted">Enter title here.</small>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" onChange={e => setPrice(e.target.value)} value={price} />
                    <small className="form-text text-muted">Enter price here.</small>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="in--stock"  onChange={() => setInStock(i=>!i)}checked={inStock}/>
                    <label className="form-check-label" htmlFor="in--stock">Check me out</label>
                </div>

                <label>categoties</label>
                        <select className="form-control" onChange={e => setCat(e.target.value)} value={cat}>
                            <option value="0" disabled>Select category</option>
                            {
                                cats ? cats.map(c => <option key={c.id} value={c.id}>{c.title}</option>) : null
                            }
                        </select>
                        <small className="form-text text-muted">Select ategory.</small>

                <button type="button" className="btn btn-outline-primary with-loader" onClick={handleCreate} >Create</button>
            </div>
        </div>
    );
}

export default Create;