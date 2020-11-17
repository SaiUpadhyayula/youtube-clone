import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import {UploadVideoPage} from "./pages/UploadVideoPage";
import {CreateVideoPage} from "./pages/CreateVideoPage";

const Routes = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/video/:videoId">
                    <Video/>
                </Route>
                <Route path="/upload-video">
                    <UploadVideoPage/>
                </Route>
                <Route path="/create-video">
                    <CreateVideoPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
