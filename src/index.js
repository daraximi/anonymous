import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './components/ErrorPage';
import CreateStory from './components/pages/CreateStory';
import Stories from './components/pages/Stories';
import About from './components/pages/About';
import StoryDetails from './components/reusable/StoryDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/create',
        element: <CreateStory />,
    },
    {
        path: '/stories',
        element: <Stories />,
    },
    {
        path: '/stories/:id',
        element: <StoryDetails />,
    },
    {
        path: '/about',
        element: <About />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
