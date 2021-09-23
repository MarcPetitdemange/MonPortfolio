import React from 'react';
import {makeStyles} from "@mui/styles";
import {Email, Facebook, Instagram, LinkedIn, Mail, PhoneIphone, Sms} from "@mui/icons-material";
import {Mug} from "react-kawaii";
import {Autocomplete, Box, Button, Chip, Divider, Grid, IconButton, TextField, Typography} from "@mui/material";
import {FaSnapchatSquare} from "react-icons/all";

const useStyles = makeStyles((theme) => ({
    form: {
        padding: '1em',
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
    {value:'Email', icon: <Email />},
    {value:'Téléphone', icon: <PhoneIphone />},
    {value:'Sms', icon: <Sms />},
    {value:'Linkedin', icon: <LinkedIn />},
    {value:'Facebook', icon: <Facebook />},
    {value:'Snapchat', icon:  <FaSnapchatSquare size={22}/>},
    {value:'Instagram', icon: <Instagram/>},
];


const Contact = () => {
    const classes = useStyles();

    return (
        <form className={classes.form} style={{width: '70%', marginLeft:"auto", marginRight:"auto"}} noValidate autoComplete="off">
            <Mug size={170} mood="happy" color="#A6E191" />
            <Typography variant={"h2"} textAlign={"left"} marginTop={7} marginBottom={3}>Mes  <span style={{color:"#dfd70f", fontWeight:"bold"}}>coordonnées</span> </Typography>

            <Grid
                container
                rowSpacing={3}
                width="100%"
                justifyContent={"space-around"}
            >
                <Grid item>
                    <IconButton>
                        <Mail style={{ fontSize: 60 }} />
                    </IconButton>
                    <Typography>Mail : marc.petitdemange57@gmail.com</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem>
                    OU
                </Divider>
                <Grid item>
                    <IconButton>
                        <PhoneIphone style={{ fontSize: 60 }} />
                    </IconButton>
                    <Typography>Tel : +33 6 11 51 09 57</Typography>
                </Grid>
            </Grid>


            <Typography variant={"h2"} textAlign={"left"} marginTop={7} marginBottom={3}>Me <span style={{color:"#d71588", fontWeight:"bold"}}> contacter </span></Typography>

            <Grid
                justify="space-between"
                container
                rowSpacing={3}
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
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option.icon} {option.value}
                            </Box>
                        )}
                        renderTags={(tagValue, getTagProps) =>
                            tagValue.map((option, index) => {debugger; return (
                                <Chip variant="outlined"  icon={ option.icon} key={option.value} label={option.value}  className={classes.chip} clickable  {...getTagProps({ index })} />
                            )})
                        }
                        renderInput={(params) => (
                            <TextField {...params} variant="filled" label="Préférez vous être contacté par :"  />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className={classes.TextFiled}  id="message" name="message" label="Votre message" variant="filled" multiline fullWidth rows={6}/>
                </Grid>
                <Grid container justify="flex-end" marginTop={3} justifyContent={'flex-end'}>
                    <Button color="primary" variant="contained" style={{marginRight: '1em'}}>Confirm</Button>
                    <Button color="secondary" variant="outlined">Cancel</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Contact;
