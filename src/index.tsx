import { App } from "./App";
import { render } from "react-dom";
import { theme } from "./styles/themeConfiguration";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { fetcher } from "@utils/fetcher";
import "./typing/environment.d";

render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <SWRConfig
                value={{
                    refreshInterval: 0,
                    fetcher,
                }}
            >
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </SWRConfig>
        </StyledEngineProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
