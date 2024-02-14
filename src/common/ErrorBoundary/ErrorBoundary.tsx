import { Component, ReactNode } from "react";
import { Typography } from "@mui/material";
import { genericErrorMessage } from "@constants";

interface IState {
    hasError: boolean;
}

interface IParams {
    children: ReactNode;
}

export class ErrorBoundary extends Component<IParams, IState> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { state, props } = this;

        if (state.hasError) {
            return <Typography>{genericErrorMessage}</Typography>;
        }

        return props.children;
    }
}
