import React, { useState } from 'react';
import './createstory.css';
import Header from '../Header';
import Footer from '../Footer';

function CreateStory() {
    const url = 'https://tan-frog-kilt.cyclic.app/api/stories';
    const [form, setForm] = useState({
        title: '',
        author: '',
        anonymous: 'yes',
        domain: 'Alerts',
        body: '',
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: type === 'select-one' ? value : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error('Failed to create story');
            }

            const data = await response.json();
            console.log(data);
            alert('Story uploaded successfully');
            setForm({
                title: '',
                author: '',
                anonymous: 'yes',
                domain: 'Alerts',
                story: '',
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading story, please try again later.');
        }
    };

    return (
        <>
            <Header />

            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={form.title}
                        onChange={handleChange}
                    />

                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        required
                        value={form.author}
                        onChange={handleChange}
                    />

                    <label htmlFor="anonymous">Anonymous:</label>
                    <select
                        id="anonymous"
                        name="anonymous"
                        value={form.anonymous}
                        onChange={handleChange}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label htmlFor="domain">Domain:</label>
                    <select
                        id="domain"
                        name="domain"
                        value={form.domain}
                        onChange={handleChange}
                    >
                        <option value="Alerts">Alerts</option>
                        <option value="Special Report">Special Report</option>
                        <option value="News">News</option>
                        <option value="Sports">Sports</option>
                        <option value="Politics and Governance">
                            Politics and Governance
                        </option>
                        <option value="Human Rights and Social Justice">
                            Human Rights and Social Justice
                        </option>
                        <option value="Crime and Justice">
                            Crime and Justice
                        </option>
                        <option value="Health and Environment">
                            Health and Environment
                        </option>
                        <option value="Business and Economy">
                            Business and Economy
                        </option>
                        <option value="Education and Science">
                            Education and Science
                        </option>
                        <option value="Technology and Cybersecurity">
                            Technology and Cybersecurity
                        </option>
                        <option value="Culture and Arts">
                            Culture and Arts
                        </option>
                        <option value="Conflict Zones and International Affairs">
                            Conflict Zones and International Affairs
                        </option>
                        <option value="Local News and Community Issues">
                            Local News and Community Issues
                        </option>
                        {/* Add more domains as needed */}
                    </select>

                    <label htmlFor="body">Story:</label>
                    <textarea
                        id="body"
                        name="body"
                        required
                        maxLength={3000}
                        value={form.story}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </>

            <Footer />
        </>
    );
}

export default CreateStory;
