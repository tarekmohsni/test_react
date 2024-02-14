import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles((theme: Theme) => ({
    nav: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        marginTop: 0,
        padding: theme.spacing(2),
        "& > a": {
            padding: theme.spacing(2),
            textTransform: "uppercase",
            color: theme.palette.primary.contrastText,
            textDecoration: "none",
        },
    },
}));
