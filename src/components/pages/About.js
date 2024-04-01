import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './about.css';

function About() {
    return (
        <>
            <Header />
            <main>
                <div
                    className="card about"
                    id="about"
                >
                    <h1>About Us</h1>
                    <p>
                        Welcome to your safe Zone! We believe that journalism in
                        Nigeria is a cornerstone of democracy, and Nigerian
                        journalists play a crucial role in shaping its public
                        understanding. Our website is a sanctuary for
                        journalists in all parts of Nigeria to tell their
                        stories, whether they’re investigative reports, personal
                        narratives, or breaking news. We understand the risks
                        Nigerian journalists face, especially when reporting on
                        sensitive topics. That’s why we prioritize anonymity.
                        Our robust security measures allow journalists to share
                        their work without fear of retribution, threat,
                        detention, or harm. Join us in fostering a vibrant and
                        healthy community where journalists can thrive,
                        collaborate, and contribute to a well-informed world.
                        Together, we’ll champion press freedom, uphold
                        journalistic ethics, and protect those who bring truth
                        to light.
                    </p>
                </div>
                <div className="card vision">
                    <h1>Our Vision</h1>
                    <p>
                        Our Vision is to create a platform where journalists in
                        Nigeria can boldly share their stories, uncover truths
                        and engage with the public while safeguarding their
                        anonymity for personal safety.
                    </p>
                </div>
                <div className="card mission">
                    <h1>Our Mission</h1>
                    <p>
                        Our mission is to empower Nigerian journalists by
                        providing a secure space to report news, express their
                        perspectives and contribute to informed discourse. We
                        prioritise their safety, allowing them to focus on their
                        vital role in the society.
                    </p>
                </div>
                <div className="card values">
                    <h1>Our Values</h1>
                    <div className="value-text">
                        <div className="small-text">
                            <h2>A</h2>
                            <p>nonymity</p>
                        </div>
                        <div className="small-text">
                            <h2>C</h2>
                            <p>ourage</p>
                        </div>
                        <div className="small-text">
                            <h2>T</h2>
                            <p>ruth</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default About;
