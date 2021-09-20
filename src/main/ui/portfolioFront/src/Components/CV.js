import React from 'react';
import {Grid} from "@mui/material";
import {File} from "react-kawaii";
import CVPDF from "../resources/documents/CV_Marc_Petitdemange.pdf";

const Cv = () => {

    return (
        <div style={{width: "100%", height:"100%", textAlign: 'center', marginLeft: 'auto', marginRight:'auto'}}>
            <Grid container>
                <Grid item xs={12}>
                    <embed src={CVPDF} type="application/pdf" width="100%" height="600px" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Cv;
