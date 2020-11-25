import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from "../Routes";
import Header from "../shared/Header";
import SideNav from "../components/SideNav";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Holder() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <SideNav/>
            <main className={classes.content}>
                <Routes/>
            </main>
        </div>
    );
}
