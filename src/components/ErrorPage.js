import { useRouteError } from 'react-router-dom';
import '../styles/error.css';
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <a className='error' href="/">Return to the home page</a>
        </div>
    );
}
