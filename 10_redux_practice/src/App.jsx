import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CountPage from "./pages/CountPage";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<CountPage />} />
            </Routes>
        </div>
    );
};

export default App;
