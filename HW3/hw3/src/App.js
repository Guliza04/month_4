import React from "react";
import './App.css';
import AboutPage from "./pages/AboutPages/AboutPage";
import NewPage from "./pages/NewPage/NewPage";

function App() {
    const user = {name: "Anna", age: 19}

    const hello =()=>{
        alert('Hello world')
    }

    return (
        <div className="App">
            <AboutPage user={user}/>
            <NewPage user={user}/>
            <button onClick={hello}>Click me</button>
        </div>
    );
}

export default App;
