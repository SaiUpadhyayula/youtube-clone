import React from 'react';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import Header from "./shared/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";

function App() {
    const {isLoading} = useAuth0();

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
