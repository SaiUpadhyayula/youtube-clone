import React from 'react';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import Header from "./shared/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import {initStore} from "./store";
import {Provider} from "react-redux";
import SideNav from "./components/SideNav";

const store = initStore();

function App() {
    const {isLoading} = useAuth0();

    if (isLoading) return <div>Loading...</div>

    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <SideNav/>
                        <Routes/>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
