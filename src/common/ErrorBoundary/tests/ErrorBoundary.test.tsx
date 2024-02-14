import { render, screen } from "rtl-config";
import { ErrorBoundary } from "../ErrorBoundary";
import { genericErrorMessage } from "@constants";

const noErrorMessage = "Everything is fine :)";
const ErrorThrower = (props: { throwError: boolean }) => {
    const { throwError } = props;
    if (throwError) {
        throw new Error("BimBadaBoum 💣");
    }

    return <div>{noErrorMessage}</div>;
};

describe("ErrorBoundary tests", () => {
    test("Given a children component When it throws an error Then display generic error message", () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function,no-empty-function
        const spy = jest.spyOn(console, "error").mockImplementation(() => {});
        render(
            <ErrorBoundary>
                <ErrorThrower throwError />
            </ErrorBoundary>
        );
        expect(screen.getByText(genericErrorMessage)).toBeInTheDocument();
        spy.mockRestore();
    });
    test("Given a children component When it doesn't throw an error Then display the children", () => {
        render(
            <ErrorBoundary>
                <ErrorThrower throwError={false} />
            </ErrorBoundary>
        );
        expect(screen.getByText(noErrorMessage)).toBeInTheDocument();
        expect(screen.queryByText(genericErrorMessage)).not.toBeInTheDocument();
    });
});
