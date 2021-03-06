import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBeer, faBook, faCode, faCoffee, faSchool, faTerminal, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Box, Grid, Paper, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { styled } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const MyPaper = styled(Paper)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    padding: '1em',
    margin: '1em'
});

const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Box width={2/4}  mx="auto">
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        QUI SUIS-JE ? <br />
                        __ <FontAwesomeIcon icon={faCoffee} size="lg" /> __
                    </Grid>
                    <Grid item xs={12}>
                        <MyPaper className={classes.paper} >
                            <Grid container >
                                <Grid item xs={12} sm={3}>
                                    <Grid
                                        container
                                        spacing={0}
                                        direction="column"
                                        alignItems="center"
                                        justify="center"
                                        style={{ height: '100%'}}
                                    >
                                        <Grid item xs={3}>
                                            <FontAwesomeIcon icon={faBook} size={"5x"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={9} style={{textAlign:"justify"}}>
                                    <FontAwesomeIcon icon={faTerminal} size="sm" /> Passionn?? par les nouvelles technologies et en particulier l'informatique, j'ai baign?? dans ce domaine ?? partir de mes 10 ans.
                                    J'ai d'abord commenc?? ?? r??aliser des sites web personnels pour me familiariser avec la programmation web pour ensuite me diriger naturellement vers EPITECH, une ??cole d'informatique. Je suis quelqu'un de tr??s dynamique et de polyvalent, j'aime beaucoup apprendre de nouvelles notions. En effet, ma formation professionnelle met l'accent sur un apprentissage vaste et me permet de b??n??ficier d'une capacit?? d'adaptation cons??quente.
                                    Je suis ??galement musicien, je joue de la batterie depuis l'??ge de 5 ans, et mixe depuis l'??ge de 18 ans.
                                    Je suis ?? l'??coute pour tout type de projet, je saurai me mettre ?? disposition de vos besoins en m'adaptant ?? vos possibles contraintes. J'ai des comp??tences dans plusieurs domaines informatiques, le d??veloppement web et mobile ??tant ma sp??cialit??. J'ai ??galement des notions avanc??es dans la maintenance informatique, ainsi que dans l'administration syst??me et le r??seau.
                                </Grid>
                            </Grid>
                        </MyPaper>
                        <MyPaper className={classes.paper} >
                            <Grid container >
                                <Grid item xs={12} sm={9} style={{textAlign:"justify"}}>
                                    <FontAwesomeIcon icon={faTerminal} size="sm" /> Passionn?? par les nouvelles technologies et en particulier l'informatique, j'ai baign?? dans ce domaine ?? partir de mes 10 ans.
                                    J'ai d'abord commenc?? ?? r??aliser des sites web personnels pour me familiariser avec la programmation web pour ensuite me diriger naturellement vers EPITECH, une ??cole d'informatique. Je suis quelqu'un de tr??s dynamique et de polyvalent, j'aime beaucoup apprendre de nouvelles notions. En effet, ma formation professionnelle met l'accent sur un apprentissage vaste et me permet de b??n??ficier d'une capacit?? d'adaptation cons??quente.
                                    Je suis ??galement musicien, je joue de la batterie depuis l'??ge de 5 ans, et mixe depuis l'??ge de 18 ans.
                                    Je suis ?? l'??coute pour tout type de projet, je saurai me mettre ?? disposition de vos besoins en m'adaptant ?? vos possibles contraintes. J'ai des comp??tences dans plusieurs domaines informatiques, le d??veloppement web et mobile ??tant ma sp??cialit??. J'ai ??galement des notions avanc??es dans la maintenance informatique, ainsi que dans l'administration syst??me et le r??seau.
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Grid
                                        container
                                        spacing={0}
                                        direction="column"
                                        alignItems="center"
                                        justify="center"
                                        style={{ height: '100%'}}
                                    >
                                        <Grid item xs={3}>
                                            <FontAwesomeIcon icon={faSchool} size={"5x"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </MyPaper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default About;
