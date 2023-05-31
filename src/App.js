import React, {useState} from "react";
import './styles/App.css'
import {
    BrowserRouter,
    Route,
    Link,
    Routes, Navigate,
} from "react-router-dom";
import Main from "./pages/Main";
import Error from "./pages/Error";
import SubTitle from "./pages/SubTitle";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Navbar from "./components/UI/navbar/Navbar";

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/main" element={<Main/>}/>
                <Route path="/subTitle" element={<SubTitle/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/*" element={<Navigate to="/error" replace/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
