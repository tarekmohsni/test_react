import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles((theme: Theme) => ({
    user: {
        color: theme.palette.primary.main,
        border: `3px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.background.paper,
        height: "100%",
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(4),
    },
}));
