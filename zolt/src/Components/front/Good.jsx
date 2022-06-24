function Good({ good }) {
    console.log(good.zolt_titles)
    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <h2>{good.title}</h2>
                    <ul className="list-group a">
                    {
                       good.zolt_titles? good.zolt_titles.split(',').map((t,i)=> <li key={i} className="list-group-item">{t}</li>) :null
                    }


                    </ul>
                </div>
            </div>
        </li>
    );
}

export default Good;