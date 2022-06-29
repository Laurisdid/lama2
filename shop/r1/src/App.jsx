import Back from "./Back"
import Front from "./Front";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
//npm install react-router-dom@6
function App(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<Front/>}/>
            <Route path="/admin"element={<Back show="admin"/>}/>
            <Route path="/admin/cats"element={<Front show="cats"/>}/>
            <Route path="/admin/products"element={<Back show="products"/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App