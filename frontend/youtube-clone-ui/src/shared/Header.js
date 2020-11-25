import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    }
}));

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Youtube Clone
                </Typography>
                <LoginButton/>
                <LogoutButton/>
            </Toolbar>
        </AppBar>
    )
}
