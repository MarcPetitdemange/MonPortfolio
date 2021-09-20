import React, {Component} from 'react';
import {Box, Step, StepContent, StepLabel, Stepper, styled, Typography} from "@mui/material";
import {Check, GroupAdd, School, Settings, VideoLabel} from "@mui/icons-material";
import univLogo from "../resources/images/Logo-universite-de-lorraine.png";


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 70,
    height: 70,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <img width="35px" src = {univLogo} />,
        2: <img width="35px" src = {univLogo} />,
        3: <VideoLabel />,
        4: <School />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}




class Studies extends Component {
    render() {
        return (
            <Box>
                <Stepper orientation="vertical">
                    <Step active = {true}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <h1> Master Informatique - spécialité IHM obtenu à l'UFR MIM de Metz </h1>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{ mb: 2 }}>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step active = {true}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <h1>  Licence Informatique obtenu à l'UFR MIM de Metz </h1>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{ mb: 2 }}>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step active = {true}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <h1> DUT Informatique obtenu à l'IUT de Metz </h1>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{ mb: 2 }}>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step active = {true}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <h1>  Baccalauréat mention Très Bien obtenu au Lycée Jean-Moulin de Forbach </h1>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{ mb: 2 }}>
                            </Box>
                        </StepContent>
                    </Step>
                </Stepper>
            </Box>
        );
    }
}

export default Studies;