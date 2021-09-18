import './App.css';
import Header from "./Components/Header";
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import Body from "./Components/Body";
import DarkTheme from "./Components/Themes/DarkTheme";
import LightTheme from "./Components/Themes/LightTheme";

function App(props) {
    const [mode, setMode] = React.useState(DarkTheme);
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === DarkTheme ? LightTheme : DarkTheme));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme(mode),
        [mode],
    );


  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Header colorMode={colorMode}/>
              <Body colorMode={colorMode}/>
          </Router>
      </ThemeProvider>
  );
}

export default App;
