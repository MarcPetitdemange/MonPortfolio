import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import {Translation} from "react-i18next";
import {Button, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import TranslateIcon from '@material-ui/icons/Translate';
import i18n from "i18next";
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
import {ContactMail, Description} from "@material-ui/icons";
import About from "./About";
import ProjectAdd from "./ProjectAdd";




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
        margin: 1,
    }
}));


export default function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
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


    return (


        <div className={classes.root}>
            <React.Fragment>
                <Router>
                    <CssBaseline />
                    <HideOnScroll {...props}>
                        <AppBar id="header" style={{backgroundColor: "rgba(255, 255, 128, .0)", textAlign: "left"}}>
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
                                <div style={{textAlign:'left', flexGrow:1}} >
                                    <Link to="/home"><Translation>{t => t('Home')}</Translation></Link>
                                    <Link to="/about"><Translation>{t => t('A propos')}</Translation></Link>
                                    <Link to="/education"><Translation>{t => t('Education')}</Translation></Link>
                                    <Link to="/experience"><Translation>{t => t('Experience')}</Translation></Link>
                                    <Link to="/cv"><Translation>{t => t('myCv')}</Translation></Link>
                                    <Link to="/contact"><Translation>{t => t('Contact')}</Translation></Link>
                                    <Link to="/github">
                                        <GitHubIcon/>
                                    </Link>
                                    <a href="https://www.linkedin.com/in/marc-petitdemange-710424146/" target="_blank">
                                        <LinkedInIcon/>
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
            </React.Fragment>
        </div>

    );
}