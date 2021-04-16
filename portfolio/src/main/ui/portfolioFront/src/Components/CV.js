import React from 'react';
import CVsvg from "../resources/images/CV.svg";
import {Grid, SvgIcon} from "@material-ui/core";
import {Browser, File} from "react-kawaii";

const Cv = () => {
    function downloadCv() {

    }

    return (
        <div style={{width: "50%", height:"100%", textAlign: 'center', marginLeft: 'auto', marginRight:'auto'}}>
            <Grid container>
                <Grid item xs={6}>
                    <img src={CVsvg} alt='mySvgImage' style={{width: '100%'}} />
                </Grid>
                <Grid item xs={6} style={{cursor:'pointer'}} onClick={downloadCv}>
                    <File size={200} mood="lovestruck" color="#83D1FB" />
                    <p>Téléchargez moi !</p>
                </Grid>

            </Grid>

        </div>
    );
};

export default Cv;
