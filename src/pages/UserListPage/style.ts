import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    addUserButton: {
        height: 40,
        marginLeft: theme.spacing(4),
    },
}));
