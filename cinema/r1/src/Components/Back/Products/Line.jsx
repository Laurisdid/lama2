import { useContext } from 'react';
import BackContext from '../BackContext';

function Line({ line }) {

    const { setDeleteCat,setModalCat, cats } = useContext(BackContext);

    const handleDelete = () => {
         setDeleteCat(line);
    }

    const handleEdit = () => {
        setModalCat(line);
    }
//console.log(cats.find(cat=> cat.title === 'Siaubo').title)
    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{line.title}</b>
                    <b><i> Price : </i>{line.price}</b>
                    <b>{line.rating}</b>
                    <b>{cats.find(cat => cat.id === line.cats_id).title}</b>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Line;