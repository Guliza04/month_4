
import './App.css';
import AboutUs from "./pages/AboutUs/AboutUs";

function App(props) {
  const text = {title: "hello", subtitle: "lorem lorem lorem"}
  return (
    <div className="App">
      <AboutUs title={text}/>
    </div>
  );
}

export default App;
