import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {SpeechBubble} from "react-kawaii";
import {Grow, Slide} from "@material-ui/core";

const SnackbarCustom = (props) => {

    const [open, setOpen] = React.useState(false);

    return (
        <Snackbar open={props.open} style={{marginTop:'6em'}} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={5000} >
            <SpeechBubble size={110} mood="happy" color="#4caf50" />
        </Snackbar>
    );
};

export default SnackbarCustom;