import { render } from "rtl-config";
import { screen } from "@testing-library/react";
import fetchMock, { MockResponse } from "fetch-mock";
import { userListApiRoute } from "@api-routes/users";
import { mockUserList } from "@features/User/UserList/tests/mockUserList";
import { UserList } from "@features/User/UserList/UserList";
import { MemoryRouter } from "react-router-dom";

const fetchMockUserList = (response: MockResponse) =>
    fetchMock.get(userListApiRoute(1), response, { name: "getUserList" });

const renderComponent = () =>
    render(
        <MemoryRouter initialEntries={["/"]}>
            <UserList isModalOpened={false} setIsModalOpened={jest.fn()} />
        </MemoryRouter>
    );

describe("UserPostList test component", () => {
    afterEach(() => fetchMock.reset());

    test("Given a fetch success When a user is fetched Then the data is displayed", async () => {
        fetchMockUserList(mockUserList);
        renderComponent();

        expect(await screen.findAllByText(mockUserList[0].email)).toHaveLength(mockUserList.length);
        expect(screen.getByText(mockUserList[0].name)).toBeInTheDocument();
        expect(fetchMock.called("getUserList")).toBeTruthy();
    });

    test("Given a fetch error When a user is fetched Then the error message is displayed", async () => {
        fetchMockUserList(500);
        renderComponent();

        expect(await screen.findByText(/error/i, { exact: false })).toBeInTheDocument();
        expect(fetchMock.called("getUserList")).toBeTruthy();
    });
});
