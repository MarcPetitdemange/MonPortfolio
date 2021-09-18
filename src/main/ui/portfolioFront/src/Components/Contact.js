import React from 'react';
import {Autocomplete, Button, Chip, Grid, TextField} from "@mui/material";
import {Mug} from "react-kawaii";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faSms} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faLinkedin, faSnapchat} from "@fortawesome/free-brands-svg-icons";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        padding: '1em',
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
    TextFiled: {
        marginTop : '1em',
        marginBottom : '1em'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    chip :{
      padding: '0.5em',
        fontSize: "initial"
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    root: {

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
                    <Autocomplete
                        fullWidth
                        multiple
                        id="checkboxes-tags-demo"
                        options={contact}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.value}
                        renderOption={(option, { selected }) => (
                            <React.Fragment>
                                <FontAwesomeIcon icon={option.icon}/> &nbsp; {option.value}
                            </React.Fragment>
                        )}
                        renderTags={(tagValue, getTagProps) =>
                            tagValue.map((option, index) => (
                                <Chip variant="outlined"  icon={<FontAwesomeIcon size="sm" icon={option.icon}/>} key={option.value} label={option.value}  className={classes.chip} clickable  {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField {...params} variant="filled" label="Préférez vous être contacté par :"  />
                        )}
                    />
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
