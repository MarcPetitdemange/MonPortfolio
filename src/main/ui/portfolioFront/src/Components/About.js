import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faCoffee, faSchool, faTerminal} from "@fortawesome/free-solid-svg-icons";
import {Box, Grid, Paper, styled} from "@mui/material";
import {makeStyles} from "@mui/styles";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.secondary,
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
                                    <FontAwesomeIcon icon={faTerminal} size="sm" /> Passionné par les nouvelles technologies et en particulier l'informatique, j'ai baigné dans ce domaine à partir de mes 10 ans.
                                    J'ai d'abord commencé à réaliser des sites web personnels pour me familiariser avec la programmation web pour ensuite me diriger naturellement vers EPITECH, une école d'informatique. Je suis quelqu'un de très dynamique et de polyvalent, j'aime beaucoup apprendre de nouvelles notions. En effet, ma formation professionnelle met l'accent sur un apprentissage vaste et me permet de bénéficier d'une capacité d'adaptation conséquente.
                                    Je suis également musicien, je joue de la batterie depuis l'âge de 5 ans, et mixe depuis l'âge de 18 ans.
                                    Je suis à l'écoute pour tout type de projet, je saurai me mettre à disposition de vos besoins en m'adaptant à vos possibles contraintes. J'ai des compétences dans plusieurs domaines informatiques, le développement web et mobile étant ma spécialité. J'ai également des notions avancées dans la maintenance informatique, ainsi que dans l'administration système et le réseau.
                                </Grid>
                            </Grid>
                        </MyPaper>
                        <MyPaper className={classes.paper} >
                            <Grid container >
                                <Grid item xs={12} sm={9} style={{textAlign:"justify"}}>
                                    <FontAwesomeIcon icon={faTerminal} size="sm" /> Passionné par les nouvelles technologies et en particulier l'informatique, j'ai baigné dans ce domaine à partir de mes 10 ans.
                                    J'ai d'abord commencé à réaliser des sites web personnels pour me familiariser avec la programmation web pour ensuite me diriger naturellement vers EPITECH, une école d'informatique. Je suis quelqu'un de très dynamique et de polyvalent, j'aime beaucoup apprendre de nouvelles notions. En effet, ma formation professionnelle met l'accent sur un apprentissage vaste et me permet de bénéficier d'une capacité d'adaptation conséquente.
                                    Je suis également musicien, je joue de la batterie depuis l'âge de 5 ans, et mixe depuis l'âge de 18 ans.
                                    Je suis à l'écoute pour tout type de projet, je saurai me mettre à disposition de vos besoins en m'adaptant à vos possibles contraintes. J'ai des compétences dans plusieurs domaines informatiques, le développement web et mobile étant ma spécialité. J'ai également des notions avancées dans la maintenance informatique, ainsi que dans l'administration système et le réseau.
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
