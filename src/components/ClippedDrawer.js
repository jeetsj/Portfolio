import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {lowerItems, upperItems} from './../vars/drawerItems'
import {MemoryRouter} from 'react-router-dom'
import Routes from "./Routes";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemLink from "./sub/ListItemLink";
import ListItemLinkShorthand from "./sub/ListItemLinkShorthand";
import ScrollToTop from "./ScrollToTop";
import { myName, myGithub } from '../vars/homeItems'
import ResumeSD from './ResumeSD.pdf';
import SubjectIcon from '@material-ui/icons/Subject';

import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            color: "#FFF",
            backgroundColor: "#4CAF50",
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: "#4CAF50",
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    lists: {
        backgroundColor: theme.palette.background.paper,
    },
    listLink: {
        textDecoration: 'none'
    },
    toolbarText: {
        flexGrow: 1,
        color: "#FFF"
    },
    toolbarIcon: {
        marginRight: 16
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

const routes = [
    '/',
    '/skills',
    '/projects',
    '/contact',
]

function ClippedDrawer(props) {
    const classes = styles();

    const [route, setRoute] = useState(0)

    const { window } = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <MemoryRouter
            initialEntries={routes}
            initialIndex={0}>
            <ScrollToTop>
                <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar position="fixed" className={classes.appBar} style={{ background: '#4CAF50' }}>
                        <Toolbar>
                            <Box display='flex' flexGrow={1}>

                            <IconButton
                                style={{ color: 'white' }}

                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                            </Box>

                            <IconButton
                                style={{ fontSize: 16, color:"white" }}
                                href={ResumeSD}
                                target="_blank"
                                color="inherit">
                                <SubjectIcon />
                                Resume
                            </IconButton>

                            <IconButton
                                style={{ fontSize: 16, color:"white" }}
                                href={myGithub}
                                target="_blank"
                                color="inherit">
                                <SvgIcon>
                                    <path
                                        d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
                                </SvgIcon>
                                GitHub
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}         
                        ModalProps={{
                            keepMounted: true, 
                        }}
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar}/>

                        <div className={classes.lists}>
                            <List>
                                {
                                    upperItems.map((item, index) => (
                                        <ListItemLink route={route} index={index} setRoute={setRoute} key={index} to={item.to} primary={item.myName} icon={item.icon}/>
                                    ))
                                }
                            </List>


                            <Divider style={{marginTop: 16}}/>

                            <Typography style={{color: '#212121', margin: 16, fontSize: 18, fontStyle: 'italic'}}>
                                My Social Links
                            </Typography>

                            <Divider/>

                            <List>
                                {
                                    lowerItems.map((item, index) => (
                                        <ListItemLinkShorthand key={index} primary={item.myName} to={item.URL}/>
                                    ))
                                }
                            </List>
                        </div>

                            </Drawer>
                        </Hidden>


                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                                <div className={classes.toolbar} />

                                <div className={classes.lists}>
                                    <List>
                                        {
                                            upperItems.map((item, index) => (
                                                <ListItemLink route={route} index={index} setRoute={setRoute} key={index} to={item.to} primary={item.myName} icon={item.icon} />
                                            ))
                                        }
                                    </List>


                                    <Divider style={{ marginTop: 16 }} />

                                    <Typography style={{ color: '#212121', margin: 16, fontSize: 18, fontStyle: 'italic' }}>
                                        My Social Links
                            </Typography>

                                    <Divider />

                                    <List>
                                        {
                                            lowerItems.map((item, index) => (
                                                <ListItemLinkShorthand key={index} primary={item.myName} to={item.URL} />
                                            ))
                                        }
                                    </List>
                                </div>

                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>

                        <Routes/>

                    </main>
                </div>
            </ScrollToTop>
        </MemoryRouter>
    );
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    window: PropTypes.func,
};

export default withStyles(styles)(ClippedDrawer);