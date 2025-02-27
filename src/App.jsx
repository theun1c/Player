import { use, useRef, useState } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

const App = () => {
    return (
        <Router>
            <NaviBar></NaviBar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
            </Routes>
        </Router>
    );
};

export default App;
