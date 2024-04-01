import React from 'react';
import { useParams } from 'react-router-dom'; //
import Header from '../Header';
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import './storydetails.css';

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
            <Header />
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
