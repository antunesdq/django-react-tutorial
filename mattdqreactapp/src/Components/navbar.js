import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (<div class="App">
                <header className="App-header">
                    <nav className="App-nav">
                        <div className="App-subheader">
                            <a className="title">Matheus Duque</a>
                            <a className="sub-title">BackEnd Developer</a>
                        </div>
                        <ul>
                            <li class="portfolio">
                                <a href="/portfolio">Portfolio</a>
                            </li>
                            <li class="blog">
                                <a href="/blog">Blog</a>
                            </li>
                            <li class="contact">
                                <a href="/contact">Contact</a>
                            </li>
                            <li class="about">
                                <a href="/about">About</a>
                            </li>
                            <li clas="lang">
                                <button class="lang-button">EN</button>
                                <button class="lang-button">PT</button>
                                <button class="lang-button">SE</button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;