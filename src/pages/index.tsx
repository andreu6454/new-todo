import {lazy} from "react";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage/ui/LoginPage";

const TestPage = lazy(() => import("./test-page"));

export const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<LoginPage/>}/>
            <Route path="test" element={<TestPage/>}/>
            <Route path={'*'} element={<div> ///// 404 \\\\\</div>}/>
        </Routes>
    );
};