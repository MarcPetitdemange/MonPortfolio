import {createTheme} from "@mui/material";

 const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#11a3d9',
        },
        secondary: {
            main: '#dfd70f',
        },
        background: {
            default: '#302d31',
            paper: '#11a3d9'
        },
        info: {
            main: '#d71588',
        },
    },
});

 export default DarkTheme;