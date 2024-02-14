import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: "#1B7F79",
                contrastText: "white",
            },
            secondary: {
                main: "#72F2EB",
                contrastText: "black",
            },
            error: red,
        },
    })
);
