import { CssBaseline } from "@mui/material";
import { Routes } from "./Routes";

export const App = () => {
    return (
        <div>
            <CssBaseline />
            <main>
                <Routes />
            </main>
        </div>
    );
};
