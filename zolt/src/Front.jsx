import { useState, useEffect } from "react";
import FrontContext from "./Components/front/FrontContext";
import FrontList from "./Components/front/List";
import axios from "axios";
import ZoltList from './Components/front/ZoltList'

function Front() {
  const [goods, setGoods] = useState(null);
  const [zolts, setZolts] = useState(null);
  const [createComment, setCreateComment]= useState(null);

  //Read
  useEffect(() => {
    axios
      .get("http://localhost:3003/front/rent")
      .then((res) => setGoods(res.data));
  }, []);
  //Read
  useEffect(() => {
    axios
      .get("http://localhost:3003/front/zolts")
      .then((res) => setZolts(res.data));
  }, []);
 // Create
 useEffect(() => {
  if (null === createComment) return;
  axios
    .post("http://localhost:3003/front/comments", createComment)
    .then(_=> {
    //  setLastUpdate(Date.now());
    })
  
}, [createComment]);
  return (
    <FrontContext.Provider value={{
        goods,
        zolts,
        setCreateComment
    }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <FrontList />
          </div>
          <div className="col-7">
            <ZoltList />
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}
export default Front;
