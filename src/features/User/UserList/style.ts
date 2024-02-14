import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles((theme: Theme) => ({
    addUserButton: {
        height: 40,
        marginLeft: theme.spacing(4),
    },
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
    },
}));
