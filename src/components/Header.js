import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <a href="/">
                <div className="logo">
                    <img
                        src="logo.png"
                        alt="Logo"
                    />
                    <h1>Press Guardians</h1>
                </div>
            </a>
            <nav>
                <ul>
                    <li>
                        <a
                            id="links"
                            href="/"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            id="links"
                            href="/stories"
                        >
                            Stories
                        </a>
                    </li>
                    <li>
                        <a
                            id="links"
                            href="/create"
                        >
                            Write a Story
                        </a>
                    </li>
                    <li>
                        <a
                            id="links"
                            href="/about"
                        >
                            About Us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
