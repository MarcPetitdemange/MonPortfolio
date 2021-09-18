import React from 'react';
import {Snackbar} from '@mui/material';
import {SpeechBubble} from "react-kawaii";

const SnackbarCustom = (props) => {


    return (
        <Snackbar open={props.open} style={{marginTop:'6em'}} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={5000} >
            <SpeechBubble size={110} mood="happy" color="#4caf50" />
        </Snackbar>
    );
};

export default SnackbarCustom;