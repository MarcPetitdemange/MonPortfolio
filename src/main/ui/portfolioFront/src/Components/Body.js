import React, {Component} from 'react';
import {Box, Container} from "@mui/material";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Github from "./Github";
import CodeSandBox from "./CodeSandBox";
import Cv from "./CV";
import Contact from "./Contact";
import About from "./About";
import ProjectAdd from "./ProjectAdd";
import {withStyles} from "@mui/styles";

const styles = theme => ({
    root: {
        textAlign: "center"
    }
});

export class Body extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root}>
                <Box my={2} >
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/github">
                            <Github />
                        </Route>
                        <Route path="/lena">
                            <CodeSandBox />
                        </Route>
                        <Route path="/cv">
                            <Cv />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/projectAdd">
                            <ProjectAdd />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Box>
            </Container>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Body);