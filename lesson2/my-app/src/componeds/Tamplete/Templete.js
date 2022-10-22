import React from "react";
import MainPage from "../../pages/mainpage/MainPage";
import AboutPage from "../../pages/aboutPage/AboutPage";

export function Header() {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

export function Footer() {

    return (
        <div className='App'>
            <Header/>
            <MainPage/>
            <h1>--------------</h1>
            <AboutPage/>
            <Footer/>
        </div>

    )
}
// export default App;