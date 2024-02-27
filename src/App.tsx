import React from "react";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
