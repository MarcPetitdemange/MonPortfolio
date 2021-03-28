import React from 'react';
import ParticlesBg from 'particles-bg'
import TypeWriterEffect from 'react-typewriter-effect'
import {useTranslation} from "react-i18next";
import i18next from "i18next";

import photoCV from "../resources/images/photoCV.jpg";

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
            <TypeWriterEffect id="typeWriter"
                textStyle={{ fontFamily: 'Red Hat Display', textAlign: 'center' }}
                startDelay={100}
                cursorColor="black"
                text={i18n.t("hi")}
                typeSpeed={100}

            />
            <img src={photoCV} style={{width: '35%', height: '35%', borderRadius:'100%'}}/>
            <ParticlesBg color="#ff0000" type="cobweb" bg={true} />
        </div>
    );
}

export default Home;
