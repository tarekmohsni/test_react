import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const useStyle = makeStyles((theme: Theme) => ({
    title: {
        fontWeight: "bold",
        fontSize: "2.5rem",
        textAlign: "center",
    },
    usageText: {
        color: theme.palette.grey[400],
        fontSize: "1.5rem",
        textAlign: "center",
    },
    boxTitle: {
        color: theme.palette.primary.main,
        fontWeight: 600,
    },
    textHighlight: {
        fontWeight: 600,
    },
    textCaption: {
        fontSize: "0.8rem",
        color: theme.palette.grey[500],
    },
    circleValue: {
        fontWeight: "bold",
        fontSize: "1.4rem",
    },
    circle: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        backgroundColor: '#1B7F79',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
}));

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));
