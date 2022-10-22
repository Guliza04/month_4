import './App.css'
// function Header() {
//   return (
//     <h1>I am Header</h1>
//   )
// }

// function Footer() {
//   return (
//     <><h1>Footer</h1>
//       <p>Lorem ipsum dolor sit amet</p>
//     </>
//   )
//
// }


function PortfolioPage(props) {

    const {user} = props

    return (
        <>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
        </>
    )
 }

const user = {
    name: 'NurDin',
    age: 18
}

function App() {
    return (
        <div className="App">
            <PortfolioPage user={user}/>
        </div>
    );
}

// function MainPage() {
//   return (
//     <>
//       <Tittle tittle="Main Page"/>
//     </>
//   )
// }

// function AboutPage() {
//   return (
//     <>
//     <Tittle tittle="About Page"/>
//     </>
//   )
// }

export default App;
