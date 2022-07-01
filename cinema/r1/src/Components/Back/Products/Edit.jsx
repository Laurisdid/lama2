import { useContext } from "react";
import { useEffect, useState } from "react";
import BackContext from "../BackContext";

function Edit() {
   const { modalCat, setEditCat,setModalCat,cats } = useContext(BackContext);
const [title,setTitle]=useState('')
const [price, setPrice] = useState('');
const[cat,setCat]=useState('0')
    useEffect(() => {
        if (null === modalCat) {
            return;
        }
        setTitle(modalCat.title);
        setPrice(modalCat.price);
        setCat(cats.filter(g=>modalCat.cat === g.title)[0]?.id??0)
    }, [modalCat]);

    const handleEdit = () => {
        const data = { title,price,cat, id: modalCat.id  };
        setEditCat(data);
        setModalCat(null);
    }

    if (null === modalCat) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Products Changer</h5>
                        <button type="button" className="close" onClick={() => setModalCat(null)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                            <small className="form-text text-muted">Enter cat title here.</small>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" className="form-control" onChange={e => setPrice(e.target.value)} value={price} />
                            <small className="form-text text-muted">Enter new price.</small>
                        </div>
                    </div>
                    <label>Category</label>
                        <select className="form-control" onChange={e => setCat(e.target.value)} value={cat}>
                            <option value="0" disabled>Select new category</option>
                            {
                                cats ? cats.map(g => <option key={g.id} value={g.id}>{g.title}</option>) : null
                            }
                        </select>
                        <small className="form-text text-muted">Select nice goody.</small>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setModalCat(null)}>Close</button>
                        <button type="button" className="btn btn-outline-primary" onClick={handleEdit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;