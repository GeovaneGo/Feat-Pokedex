import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./screens/mainPage";

export const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainPage/>}
                    >                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;