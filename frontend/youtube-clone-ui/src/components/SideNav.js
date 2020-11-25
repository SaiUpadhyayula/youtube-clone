import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import {Divider} from "@material-ui/core";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    }
}));

export default function SideNav() {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button key={"Home"}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button key={"Trending"}>
                        <ListItemIcon><WhatshotIcon/></ListItemIcon>
                        <ListItemText primary={"Trending"}/>
                    </ListItem>
                    <ListItem button key={"Subscriptions"}>
                        <ListItemIcon><SubscriptionsIcon/></ListItemIcon>
                        <ListItemText primary={"Subscriptions"}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button key={"Library"}>
                        <ListItemIcon><VideoLibraryIcon/></ListItemIcon>
                        <ListItemText primary={"Library"}/>
                    </ListItem>
                    <ListItem button key={"History"}>
                        <ListItemIcon><HistoryIcon/></ListItemIcon>
                        <ListItemText primary={"History"}/>
                    </ListItem>
                    <ListItem button key={"Liked Videos"}>
                        <ListItemIcon><ThumbUpAltIcon/></ListItemIcon>
                        <ListItemText primary={"Liked Videos"}/>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}
