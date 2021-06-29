import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import {Translation} from "react-i18next";
import {
    Button,
    Divider, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography
} from "@material-ui/core";
import TranslateIcon from '@material-ui/icons/Translate';
import i18n from "i18next";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/Inbox';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import {
    IconFlagFR,
    IconFlagDE,
    IconFlagUS
} from 'material-ui-flags';
import { makeStyles } from '@material-ui/core/styles';
import Github from "./Github";
import Home from "./Home";
import CodeSandBox from "./CodeSandBox";
import Cv from "./CV";
import Contact from "./Contact";
import About from "./About";
import ProjectAdd from "./ProjectAdd";
import GetAppIcon from "@material-ui/icons/GetApp";
import SnackbarCustom from "./Snackbars/SnackbarCustom";
import clsx from "clsx";




function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
    },
    Link:{
        margin: '0.3em',
        padding: '0.2em',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));


export default function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClickDownload = () => {
        setOpen(true);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (chaine) => {
        console.log(chaine);
        debugger;
        if(chaine != null && typeof chaine === "string")
            i18n.changeLanguage(chaine);
        setAnchorEl(null);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );



    return (


        <div className={classes.root}>
            <React.Fragment>
                <Router>
                    <CssBaseline />
                    <HideOnScroll {...props}>
                        <AppBar id="header" style={{backgroundColor: "rgb(255, 255, 255)", textAlign: "left"}}>
                            <Toolbar>
                                <Menu
                                    id="menu-languages"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => handleClose('fr')}><IconFlagFR/><span>&nbsp;<Translation>{t => t('French')}</Translation></span></MenuItem>
                                    <MenuItem onClick={() => handleClose('de')}><IconFlagDE/><span>&nbsp;<Translation>{t => t('German')}</Translation></span></MenuItem>
                                    <MenuItem onClick={() => handleClose('en')}><IconFlagUS/><span>&nbsp;<Translation>{t => t('English')}</Translation></span></MenuItem>
                                </Menu>
                                <IconButton onClick={toggleDrawer('left', true)}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                                    {list('left')}
                                </Drawer>
                                <div style={{textAlign:'left', flexGrow:1}} >
                                    <Link className={classes.Link} to="/home"><Translation>{t => t('Home')}</Translation></Link>
                                    <Link className={classes.Link} to="/about"><Translation>{t => t('A propos')}</Translation></Link>
                                    <Link className={classes.Link} to="/education"><Translation>{t => t('Education')}</Translation></Link>
                                    <Link className={classes.Link} to="/experience"><Translation>{t => t('Experience')}</Translation></Link>
                                    <Link className={classes.Link} to="/cv"><Translation>{t => t('myCv')}</Translation></Link>
                                    <Link className={classes.Link} to="/contact"><Translation>{t => t('Contact')}</Translation></Link>
                                    <Link className={classes.Link} to="/github">
                                        <GitHubIcon/>
                                    </Link>
                                    <a href="https://www.linkedin.com/in/marc-petitdemange-710424146/" target="_blank">
                                        <LinkedInIcon/>
                                    </a>
                                    <a href="http://localhost:9000/files/pdf/CV_Marc_Petitdemange.pdf" download onClick={handleClickDownload} >
                                        <GetAppIcon />
                                    </a>
                                </div>
                                <IconButton aria-controls="menu-languages" aria-haspopup="true" onClick={handleClick} >
                                    <TranslateIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                    <Toolbar />
                    <Container style={{width:"100%", maxWidth:"none", padding:0}}>
                        <Box my={2} >
                            <Switch>
                                <Route path="/home">
                                    <Home />
                                </Route>
                                <Route path="/github">
                                    <Github />
                                </Route>
                                <Route path="/lena">
                                    <CodeSandBox />
                                </Route>
                                <Route path="/cv">
                                    <Cv />
                                </Route>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/projectAdd">
                                    <ProjectAdd />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Box>
                    </Container>
                </Router>
                <SnackbarCustom open={open}/>
            </React.Fragment>
        </div>

    );
}
