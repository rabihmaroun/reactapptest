import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/ui/navbar";
import "./App.css";
import HomePage from "./pages/HomePage/homepage";
import Details from "./pages/Details/details";
import PackageDetails from "./pages/PackageDetails/packagedetails";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path='/' element={<Navbar title="Homepage" />} /> 
          <Route path='/details' element={<Navbar title="Details" backURL="/" />} />
          <Route path='/package_details' element={<Navbar title="Gaming" backURL="/details" />} />
        </Routes>
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details' element={<Details />} />
            <Route path='/package_details' element={<PackageDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
