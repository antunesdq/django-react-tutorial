import './App.css';
import Navbar from './Components/navbar';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Home from './pages/Home'

function App() {
    let Component 
    switch (window.location.pathname) {
        case '/home':
            Component = Home
            break
        case '/about':
            Component = About
            break
        case '/contact':
            Component = Contact
            break
        case '/portfolio':
            Component = Portfolio
            break
        case '/blog':
            Component = Blog
            break
        default:
            break
    }
    return (
        <div className="App">
            <Navbar />
            <Component />
        </div>
    );
}

export default App;