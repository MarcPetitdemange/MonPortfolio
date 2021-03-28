import React from 'react';
import CVsvg from "../resources/images/CV.svg";
import {SvgIcon} from "@material-ui/core";

const Cv = () => {
    return (
        <div>
            <img src={CVsvg} alt='mySvgImage' />
        </div>
    );
};

export default Cv;
