import React from 'react';
import {Parallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import {Image} from "@material-ui/icons"
import CVsvg from "../resources/images/CV.svg";
import {Grid, MenuItem, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Mug} from "react-kawaii";

const useStyles = makeStyles((theme) => ({
    form: {
        padding: '1em'
    },
    TextFiled: {
        marginTop : '1em',
        marginBottom : '1em'
    }
}));

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
                    <TextField className={classes.TextFiled} id="contactPreference" name="contactPreference" label="Préférez-vous être contacté par" variant="filled" fullWidth />
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
