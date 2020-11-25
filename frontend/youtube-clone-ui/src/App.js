import React from 'react';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import {BrowserRouter as Router} from "react-router-dom";
import {initStore} from "./store";
import {Provider} from "react-redux";
import Holder from "./pages/Holder";

const store = initStore();

function App() {
    const {isLoading} = useAuth0();

    if (isLoading) return <div>Loading...</div>

    return (
        <Provider store={store}>
            <Router>
                <Holder/>
            </Router>
        </Provider>
    );
}

export default App;
