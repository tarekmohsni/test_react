import { render } from "rtl-config";
import { UserPostList } from "@features/Posts/PostList/UserPostList";
import { screen } from "@testing-library/react";
import fetchMock, { MockResponse } from "fetch-mock";
import { userPostListApiRoute } from "@api-routes/users";
import { mockUserPostList } from "@features/Posts/PostList/tests/mockUserPostList";

const mockUserId = "1";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: mockUserId,
    }),
}));

const fetchMockUserPostList = (response: MockResponse) =>
    fetchMock.get(userPostListApiRoute(mockUserId), response, { name: "getUserPostList" });

describe("UserPostList test component", () => {
    afterEach(() => fetchMock.reset());

    test("Given a fetch success When a user's posts are fetched Then the data is displayed", async () => {
        fetchMockUserPostList(mockUserPostList);
        render(<UserPostList />);

        expect(await screen.findAllByText(mockUserPostList[0].body)).toHaveLength(mockUserPostList.length);
        expect(screen.getByText(mockUserPostList[0].title)).toBeInTheDocument();
        expect(fetchMock.called("getUserPostList")).toBeTruthy();
    });

    test("Given a fetch error When a user's posts are fetched Then the error message is displayed", async () => {
        fetchMockUserPostList(500);
        render(<UserPostList />);

        expect(await screen.findByText(/error/i, { exact: false })).toBeInTheDocument();
        expect(fetchMock.called("getUserPostList")).toBeTruthy();
    });
});
