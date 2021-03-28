import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardActionArea, CardMedia, IconButton} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from '@material-ui/icons/GetApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";


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
                    <IconButton>
                        <AssignmentIcon/>
                    </IconButton>
                </CopyToClipboard>
                <IconButton download={props.commonProps.download_url}>
                    <GetAppIcon/>
                </IconButton>
                    <IconButton href={props.commonProps.html_url} target="_blank">
                        <GitHubIcon />
                    </IconButton>
            </CardActions>
        </Card>
    );
};

export default MyCard;
