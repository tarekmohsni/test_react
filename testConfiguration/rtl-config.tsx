import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { theme } from "../src/styles/themeConfiguration";
import { ThemeProvider } from "@mui/material/styles";
import { defaultSWRTestOptions } from "./swrConfigTest";
import { SWRConfig } from "swr";

type RenderParams = Parameters<typeof render>;
type RenderReturnType = ReturnType<typeof render>;
type CustomRender = (ui: RenderParams[0], renderOptions?: RenderParams[1]) => RenderReturnType;

const AllTheProviders = (props: { children: ReactNode }) => {
    const { children } = props;

    return (
        <SWRConfig value={defaultSWRTestOptions}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </SWRConfig>
    );
};

const customRender: CustomRender = (ui, renderOptions) => render(ui, { wrapper: AllTheProviders, ...renderOptions });

export * from "@testing-library/react";

export { customRender as render };
