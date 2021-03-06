// import { useState } from "react";

import { useContext } from "react";
import Good from "./Good";
import GoodContext from "./GoodContext";

function List({setDeleteData, setModalData}) {

    const {goods} = useContext(GoodContext);

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>List </h2>

            </div>
            <div className="card-body">
                <ul className="list-group">
                  
                    {
                        goods ? goods.map(good => <Good
                            key={good.id}
                            good={good}
                            setDeleteData={setDeleteData}
                            setModalData={setModalData}
                        ></Good>) : null
                    }
                </ul>
             
            </div >
        </div >
    );
}

export default List;