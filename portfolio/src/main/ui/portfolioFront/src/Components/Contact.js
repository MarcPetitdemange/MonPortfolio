import React from 'react';
import {Parallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import {Image} from "@material-ui/icons"
import CVsvg from "../resources/images/CV.svg";

const Contact = () => {
    return (
        <div style={{width:"100%", height: "4000px", backgroundColor:'red' }} className="gradient">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>

            {/*<ParallaxProvider>*/}
            {/*    <Parallax*/}
            {/*        x={[60, -60]}*/}
            {/*        slowerScrollRate*/}
            {/*        tag='figure'*/}
            {/*    >*/}
            {/*        <img*/}
            {/*            src='https://source.unsplash.com/random/250x350'*/}
            {/*            alt='hi there'*/}
            {/*        />*/}
            {/*    </Parallax>*/}
            {/*</ParallaxProvider>*/}
                <ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            image: 'https://source.unsplash.com/random/250x350',
                            amount: 0.1,
                        },
                        {
                            image: 'https://source.unsplash.com/random',
                            amount: 0.3,
                        },
                    ]}
                    style={{
                        height: '500px',
                    }}
                >
                </ParallaxBanner>
                <Parallax
                    x={["0", "100"]}
                    slowerScrollRate
                    tagOuter="figure"
                >
                    <img
                        src='https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/product.png'
                        alt='hi there'
                        width="50%"
                    />
                </Parallax>

                <h1>Banner Children</h1>
        </div>
    );
};

export default Contact;
