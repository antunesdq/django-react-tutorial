import './App.css';
import Navbar from './Components/navbar';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Home from './pages/Home'
import { Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
        </div>
    );
}

export default App;