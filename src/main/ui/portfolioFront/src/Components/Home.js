import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect'
import {useTranslation} from "react-i18next";
import i18next from "i18next";


import photoCV from "../resources/images/photoCV.jpg";
import {Button, Grid} from "@mui/material";
import {Help} from "@mui/icons-material";

i18next.on('languageChanged', function(lng) {
    // E.g. set the moment locale with the current language
    // let typeWriter = document.getElementById('typeWriter');
    // then re-render your app
});


function Home(props) {
    const [,i18n] = useTranslation('common');
    return (
        <div>
            <Grid className="container" container spacing={2} style={{alignItems:'center'}}>
                <Grid item xs={4}>
                    <img src={photoCV} style={{width: '50%', borderRadius:'100%'}}/>
                </Grid>
                <Grid item xs={8}>
                    <TypeWriterEffect id="typeWriter"
                                      textStyle={{ fontFamily: 'Red Hat Display', textAlign: 'left' }}
                                      startDelay={100}
                                      cursorColor="black"
                                      text={i18n.t("hi")}
                                      typeSpeed={100}
                    />
                </Grid>
            </Grid>
            <Button color="primary" size={"large"} variant="contained" startIcon={<Help/>} style={{margin:"1em"}}>
                En savoir plus
            </Button>
        </div>
    );
}

export default Home;
