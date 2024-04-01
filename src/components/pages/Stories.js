import { React, useEffect, useState } from 'react';
import StoryCard from '../reusable/StoryCard';
import Header from '../Header';
import Footer from '../Footer';
import './stories.css';
function Stories() {
    const url = 'https://tan-frog-kilt.cyclic.app/api/stories';
    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function fetchStories() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); // Log the fetched data to the console
                setStories(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchStories();
    }, []);
    return (
        <>
            <Header />
            <main>
                {stories.length > 0 ? (
                    stories
                        .map((story, index) => (
                            <StoryCard
                                key={index}
                                story={story}
                            />
                        ))
                        .reverse()
                ) : (
                    <p className="none">
                        No stories at this time. Please try again later
                    </p>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Stories;
