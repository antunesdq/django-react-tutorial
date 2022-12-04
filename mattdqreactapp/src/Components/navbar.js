import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="App-nav">
            <div className="App-subheader">
                <Link to="/" className="title">Matheus Duque</Link>
                <Link to="/" className="sub-title">BackEnd Developer</Link>
            </div>
            <ul>
                <li class="portfolio">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li class="blog">
                    <Link to="/blog">Blog</Link>
                </li>
                <li class="contact">
                    <Link to="/contact">Contact</Link>
                </li>
                <li class="about">
                    <Link to="/about">About</Link>
                </li>
                <li clas="lang">
                    <button class="lang-button">EN</button>
                    <button class="lang-button">PT</button>
                    <button class="lang-button">SE</button>
                </li>
            </ul>
        </nav>
    );
}