import React from 'react';
import ParticlesBg from 'particles-bg'
import TypeWriterEffect from 'react-typewriter-effect'
import {useTranslation} from "react-i18next";
import i18next from "i18next";

import photoCV from "../resources/images/photoCV.jpg";
import {SpeechBubble} from "react-kawaii";
import {Button, Icon} from "@material-ui/core";
import HelpIcon from '@material-ui/icons/Help';

i18next.on('languageChanged', function(lng) {
    // E.g. set the moment locale with the current language
    // let typeWriter = document.getElementById('typeWriter');
    // then re-render your app
});
//Test

function Home(props) {
    const [t,i18n] = useTranslation('common');


    return (
        <div style={{textAlign: "center"}}>

            <img src={photoCV} style={{width: '35%', height: '35%', borderRadius:'100%'}}/>
            <TypeWriterEffect id="typeWriter"
                              textStyle={{ fontFamily: 'Red Hat Display', textAlign: 'center' }}
                              startDelay={100}
                              cursorColor="black"
                              text={i18n.t("hi")}
                              typeSpeed={100}

            />
            <Button color="primary" size={"large"} variant="contained" startIcon={<HelpIcon/>} style={{margin:"1em"}}>
                En savoir plus
            </Button>

            <ParticlesBg color="#ff0000" type="cobweb" bg={true} />
        </div>
    );
}

export default Home;
