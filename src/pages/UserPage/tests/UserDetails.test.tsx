import { render } from "rtl-config";
import { screen } from "@testing-library/react";
import fetchMock, { MockResponse } from "fetch-mock";
import { userApiRoute } from "@api-routes/users";
import { UserPage } from "@pages/UserPage/UserPage";
import { mockUserList } from "@features/User/UserList/tests/mockUserList";

const fetchMockUserDetails = (response: MockResponse) =>
    fetchMock.get(userApiRoute(mockUserList[0].id.toString()), response, { name: "getUser" });

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: mockUserList[0].id.toString(),
    }),
}));

jest.mock("@features/Posts/PostList/UserPostList", () => ({
    UserPostList: () => <div>Posts</div>,
}));

describe("UserDetails test component", () => {
    afterEach(() => fetchMock.reset());

    test("Given a fetch success When a user is fetched Then the data is displayed", async () => {
        fetchMockUserDetails(mockUserList[0]);
        render(<UserPage />);

        expect(await screen.findByText(mockUserList[0].name)).toBeInTheDocument();
        expect(screen.getByText(mockUserList[0].email, { exact: false })).toBeInTheDocument();
        expect(screen.getByText(mockUserList[0].gender, { exact: false })).toBeInTheDocument();
        expect(screen.getByText(mockUserList[0].status, { exact: false })).toBeInTheDocument();
        expect(fetchMock.called("getUser")).toBeTruthy();
    });

    test("Given a fetch error When a user is fetched Then the error message is displayed", async () => {
        fetchMockUserDetails(500);
        render(<UserPage />);

        expect(await screen.findByText(/error/i, { exact: false })).toBeInTheDocument();
        expect(fetchMock.called("getUser")).toBeTruthy();
    });
});
