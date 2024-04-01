import React from 'react';
import '../styles/subscribe.css';

function Subscribe() {
    return (
        <div className="subscribe">
            <form className="form">
                <label
                    className="sub-text"
                    htmlFor="email"
                >
                    Sign up to receive more updates on Press Guardians
                </label>
                <div className="email-container">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
}

export default Subscribe;
