import React from 'react';
import PropTypes from 'prop-types';
import {Translation} from "react-i18next";
import {
    AppBar,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Slide,
    Toolbar,
    useScrollTrigger
} from "@mui/material";
import i18n from "i18next";
import './Header.css';
import {makeStyles} from "@mui/styles";

import {Link} from "react-router-dom";
import {
    GetApp,
    GitHub,
    Home as HomeIcon,
    Info,
    LinkedIn,
    LocalCafe,
    Menu as MenuIcon,
    Receipt,
    School,
    Translate,
    Work
} from "@mui/icons-material";
import SnackbarCustom from "./Snackbars/SnackbarCustom";
import clsx from "clsx";
import {ThemeSwitch} from "./CustomComponents/ThemeSwitch";


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
    title: {
        flexGrow: 1,
        textAlign: 'left',
    },
    Link:{
        margin: theme.spacing(2),
        color: theme.palette.text.main
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
    const [open, ] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (chaine) => {
        console.log(chaine);
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

    const toggleDrawer = (anchor, openIt) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: openIt });
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
                {[<Translation icon={<HomeIcon />} to="/home">{t => t('Home')}</Translation>,
                    <Translation icon={<Info />} to="/about">{t => t('A propos')}</Translation>,
                    <Translation icon={<School />} to="/studies">{t => t('Education')}</Translation>,
                    <Translation icon={<Work />} to="/experiencePro">{t => t('Experience')}</Translation>,
                    <Translation icon={<Receipt />} to="/cv">{t => t('myCv')}</Translation>,
                    <Translation icon={<LocalCafe />} to="/contact">{t => t('Contact')}</Translation>,
                    ].map((text, index) => {
                        return (

                                <ListItem className={classes.Link} button key={text} component={Link} to={text.props.to}>
                                        {text.props.icon}
                                        <ListItemText primary={text} />
                                </ListItem>
                        )
                    })}
            </List>
        </div>
    );





    return (
        <div className={classes.root}>
            <React.Fragment>
                    <CssBaseline />
                    <HideOnScroll {...props}>
                        <AppBar color="primary">
                            <Toolbar>
                                <Menu
                                    id="menu-languages"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => handleClose('fr')}><span>&nbsp;<Translation>{t => t('French')}</Translation></span></MenuItem>
                                    <MenuItem onClick={() => handleClose('de')}><span>&nbsp;<Translation>{t => t('German')}</Translation></span></MenuItem>
                                    <MenuItem onClick={() => handleClose('en')}><span>&nbsp;<Translation>{t => t('English')}</Translation></span></MenuItem>
                                </Menu>
                                <IconButton onClick={toggleDrawer('left', true)}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                                    {list('left')}
                                </Drawer>
                                <div style={{textAlign:'left', flexGrow:1}} >
                                    <Link className={classes.Link} to="/github">
                                        <GitHub/>
                                    </Link>
                                    <Link className={classes.Link} to={{ pathname: "https://www.linkedin.com/in/marc-petitdemange-710424146/" }} target="_blank" >
                                        <LinkedIn/>
                                    </Link>
                                    <Link className={classes.Link} to={{ pathname: "http://localhost:9000/files/pdf/CV_Marc_Petitdemange.pdf" }} target="_blank" download >
                                        <GetApp />
                                    </Link>
                                </div>
                                <IconButton aria-controls="menu-languages" aria-haspopup="true" onClick={handleClick} >
                                    <Translate />
                                </IconButton>
                                <ThemeSwitch sx={{ m: 1 }} defaultChecked  onClick={props.colorMode.toggleColorMode} />
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                    <Toolbar />
                <SnackbarCustom open={open}/>
            </React.Fragment>
        </div>

    );
}
