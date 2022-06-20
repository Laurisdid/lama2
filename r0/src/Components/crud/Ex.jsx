function Ex({ ex, setDeleteData, setModalData }) {

    const handleDelete = () => {
        setDeleteData(ex);
    }

    const handleEdit = () => {
        setModalData(ex);
    }

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{ex.name}</b>
                    <span>{['Test', 'Written', 'Spoken'][ex.type - 1]}</span>
                    <i>{ex.place}</i>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Ex;