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
                    <b>{ex.id}</b>
                    <b>{ex.name}</b>
                    <b>{ex.lastTime}</b>
                    <b>{ex.totalKm}</b>
                    <b>{ex.status}</b>
                    <b>{ex.place}</b>
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