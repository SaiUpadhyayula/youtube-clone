import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Routes = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/video">
                    <Video/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
