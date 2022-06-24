import { useState, useEffect } from "react";
import FrontContext from "./Components/front/FrontContext";
import FrontList from "./Components/front/List";
import axios from "axios";

function Front() {
  const [goods, setGoods] = useState(null);

  //Read
  useEffect(() => {
    axios
      .get("http://localhost:3003/front/rent")
      .then((res) => setGoods(res.data));
  }, []);

  return (
    <FrontContext.Provider value={{
        goods
    }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <FrontList />
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}
export default Front;
