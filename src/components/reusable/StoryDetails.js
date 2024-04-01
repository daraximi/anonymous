import React from 'react';
import { useParams } from 'react-router-dom'; //
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import './storydetails.css';
import '../../styles/header.css';

function StoryDetails() {
    const url = 'https://tan-frog-kilt.cyclic.app/api/stories';
    const { id } = useParams();
    const [story, setStory] = useState({});
    useEffect(() => {
        async function fetchStory() {
            try {
                const response = await fetch(`${url}/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); // Log the fetched data to the console
                setStory(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchStory();
    }, [id]);

    return (
        <>
            <header>
                <a href="/">
                    <div className="logo">
                        <h1>Te Press Guardians</h1>
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

            <main className="container">
                <div className="body">
                    <h1>{story.title}</h1>
                    <h2>Domain: {story.domain}</h2>
                    {story.anonymous === 'yes' ? (
                        <p>Anonymous</p>
                    ) : (
                        <h2>By {story.author}</h2>
                    )}
                    <p>{story.body}</p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default StoryDetails;
