import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'video-react/dist/video-react.css';
import './index.css';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";


ReactDOM.render(
    <Auth0ProviderWithHistory>
        <App/>
    </Auth0ProviderWithHistory>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
