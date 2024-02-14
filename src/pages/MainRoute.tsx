import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navigation } from "@features/Navigation/Navigation";
import { ErrorBoundary } from "@common/ErrorBoundary/ErrorBoundary";

export const MainRoute = () => (
    <Stack>
        <Navigation />
        <Container maxWidth="xl">
            <Box marginY={5}>
                <ErrorBoundary>
                    <Outlet />
                </ErrorBoundary>
            </Box>
        </Container>
    </Stack>
);
