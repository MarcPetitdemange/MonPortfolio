import React from 'react';
import {Parallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import {Image} from "@material-ui/icons"
import CVsvg from "../resources/images/CV.svg";
import {Chip, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, useTheme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Mug} from "react-kawaii";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faSms} from "@fortawesome/free-solid-svg-icons";
import {
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
    faInstagram,
    faSnapchat
} from "@fortawesome/free-brands-svg-icons";
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles((theme) => ({
    form: {
        padding: '1em'
    },
    TextFiled: {
        marginTop : '1em',
        marginBottom : '1em'
    },
    formControl: {
        margin: theme.spacing(1),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
        padding: '0.8vw',
        borderRadius: '32px'
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const contact = [
    {value:'Email', icon: faEnvelope},
    {value:'Téléphone', icon: faPhone},
    {value:'Sms', icon: faSms},
    {value:'Linkedin', icon: faLinkedin},
    {value:'Facebook', icon: faFacebook},
    {value:'Snapchat', icon: faSnapchat},
    {value:'Instagram', icon: faInstagram},
];


const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [listContactType, setListContactType] = React.useState([]);

    const handleChange = (event) => {
        setListContactType(event.target.value);
        debugger;
    };

    function deleteItemOfListContactType(selectList, valueToDelete) {
        debugger;
        let newList = selectList.filter((item) => item.value != valueToDelete.value);
        setListContactType(newList);
    }



    return (
        <form className={classes.form} style={{width: '70%', marginLeft:"auto", marginRight:"auto"}} noValidate autoComplete="off">
            <Mug size={170} mood="happy" color="#A6E191" />
            <Grid
                justify="space-between" // Add it here :)
                container
            >
                <Grid item>
                    <TextField style={{position : 'left'}}className={classes.TextFiled} id="name" name="name" label="Votre nom" variant="filled" />
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.TextFiled} id="numTel" name="numTel" label="Votre numéro de téléphone" variant="filled" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.TextFiled} id="email" name="email" label="Votre adresse e-mail" variant="filled" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.TextFiled} fullWidth variant="filled">
                        <InputLabel id="demo-mutiple-chip-label">Comment souhaitez vous être contacté ?</InputLabel>
                        <Select
                            variant="filled"
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={listContactType}
                            onChange={handleChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => {
                                return <div className={classes.chips}>
                                    {selected.map((contactType => {
                                        return (<Chip icon={<FontAwesomeIcon size="lg" icon={contactType.icon}/>} key={contactType.value} label={contactType.value} className={classes.chip} clickable onMouseDown={(event) => {
                                            event.stopPropagation();
                                        }} onDelete={(e) => {deleteItemOfListContactType(selected,contactType)}}/>);
                                    }))}
                                </div>
                            }}
                            MenuProps={MenuProps}
                        >
                            {contact.map((contactType) => (
                                <MenuItem key={contactType.value} value={contactType} >
                                    <FontAwesomeIcon icon={contactType.icon}/> &nbsp;{contactType.value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.TextFiled}  id="message" name="message" label="Votre message" variant="filled" multiline fullWidth rows={6}/>
                </Grid>
                <Grid container justify="flex-end">
                    <Button color="primary" variant="contained" style={{marginRight: '1em'}}>Confirm</Button>
                    <Button color="secondary" variant="outlined">Cancel</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Contact;
