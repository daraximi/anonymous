import React from 'react';
import '../reusable/storycard.css';
import { Link } from 'react-router-dom';

function StoryCard({ index, story }) {
    return (
        <>
            <div className="story">
                {/* Title */}
                <h1>{story.title}</h1>
                <div>
                    {/* Author and publishing data */}
                    <h2>{story.domain}</h2>
                    {story.anonymous === 'yes' ? (
                        <p>Anonymous</p>
                    ) : (
                        <h2>{story.author}</h2>
                    )}
                </div>
                <p className="truncate">{story.body}</p>
                <Link
                    className="link"
                    to={{
                        pathname: `/stories/${story._id}`,
                        state: {
                            story: story,
                            index: index,
                        },
                    }}
                >
                    Read More...
                </Link>
            </div>
        </>
    );
}

export default StoryCard;
