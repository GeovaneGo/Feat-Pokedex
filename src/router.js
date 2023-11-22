import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./screens/mainPage";
import PokeInfoPage from "./screens/pokeInfo";

export const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainPage/>}
                    >                    
                </Route>
                <Route
                    path="/pokemon/:pokeId"
                    Component={PokeInfoPage}
                    >                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;