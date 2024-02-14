import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles((theme: Theme) => ({
    postList: {
        "&:not(:first-of-type)": {
            marginTop: theme.spacing(2),
        },
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        height: "100%",
        padding: theme.spacing(4),
    },
}));
