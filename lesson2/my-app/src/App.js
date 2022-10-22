import React from "react";
import './App.css';
import MainPage from './pages/mainpage/MainPage'
import AboutPage from "./pages/aboutPage/AboutPage";
import {Footer, Header} from './componeds/Tamplete/Templete'
import UsersPage from "./componeds/usersPage/usersPage";

function App() {
    return(
        <div className='App'>
            <Header/>
            <MainPage/>
            <h1>------------</h1>
            <AboutPage/>
            <Footer/>
            <UsersPage/>
        </div>
    );
}

export default App;
