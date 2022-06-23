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
            <Route path="/admin"element={<Back/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App