import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./screens/main-page/mainPage";
import PokeInfoPage from "./screens/poke-info/pokeInfo";

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
                    element={<PokeInfoPage/>}
                    >                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;