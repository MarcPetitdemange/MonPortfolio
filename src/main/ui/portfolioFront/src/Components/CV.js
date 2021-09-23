import React from 'react';
import {Box} from "@mui/material";
import CVPDF from "../resources/documents/CV_Marc_Petitdemange.pdf";

const Cv = () => {

    return (
        <Box height="90vh" display="flex" flexDirection="column">
            <Box flex={1}>
                    <embed src={CVPDF} type="application/pdf" width="100%" height={"100%"} />
            </Box>
        </Box>
    );
};

export default Cv;
