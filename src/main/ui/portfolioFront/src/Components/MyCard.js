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
        maxWidth: 345,
        margin: 6
    },
    media: {
        height: 140,
    },
});

const MyCard = (props) => {
    const classes = useStyles();
    debugger;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.commonProps.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.commonProps.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>

                <CopyToClipboard text={props.commonProps.clone_url}>
                    <Button>
                        <Assignment/>
                    </Button>
                </CopyToClipboard>
                <Button download={props.commonProps.download_url}>
                    <GetApp/>
                </Button>
                    <IconButton href={props.commonProps.html_url} target="_blank">
                        <GitHub />
                    </IconButton>
            </CardActions>
        </Card>
    );
};

export default MyCard;
