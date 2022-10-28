import React from "react";
import './App.css';
import AboutUs from "./pages/aboutUS/AboutUs";
import PortfolioPage from "./pages/rortfolioPage/PortfolioPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <PortfolioPage/>
      <ContactsPage/>
    </div>
  );
}

export default App;
