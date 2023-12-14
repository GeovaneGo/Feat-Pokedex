import { Routes, Route, HashRouter} from "react-router-dom";
import MainPage from "./screens/main-page/mainPage";
import PokeInfoPage from "./screens/poke-info/pokeInfo";

export const Router =()=>{
    return(
        <HashRouter>
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
        </HashRouter>
    )
}

export default Router;