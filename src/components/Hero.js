import React from 'react';
import '../styles/hero.css';
import background from '../assets/background1.png';

function Hero() {
    return (
        <main
            className="hero"
            style={{ backgroundImage: `url(${background})` }}
        >
            <h1 id="message">You are safe here!</h1>
            {/* <p>This is the body of the website.</p> */}

            <a href="/create">
                <input
                    id="share"
                    type="button"
                    value={'Share your story'}
                />
            </a>
        </main>
    );
}

export default Hero;
