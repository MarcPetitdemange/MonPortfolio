import React from 'react';
import {
    Button ,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
    IconButton
} from '@mui/material';
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {Assignment, GetApp, GitHub} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";



const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: 200,
        minHeight: 200
    },
    button: {
        height: "100%",
    },
    text: {
        textOverflow:'ellipsis',
        width:'auto',
        overflow:'hidden',
    },

});

const MyCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.button}>
                <CardContent className={classes.button}>
                    <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                        {props.commonProps.name}
                    </Typography>
                    <Typography className={classes.text} variant="body2" color="textSecondary" component="p" style={{height:80}}>
                        {props.commonProps.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button color="info" size="small" >
                    Learn More
                </Button>
                <CopyToClipboard color='secondary' text={props.commonProps.clone_url}>
                    <IconButton>
                        <Assignment/>
                    </IconButton>
                </CopyToClipboard>
                <IconButton color='info' download={props.commonProps.download_url}>
                    <GetApp/>
                </IconButton>
                <IconButton href={props.commonProps.html_url} target="_blank">
                    <GitHub />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default MyCard;
