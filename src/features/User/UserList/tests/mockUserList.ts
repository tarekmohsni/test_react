import { IUser } from "@features/User/IUser";

export const mockUserList: IUser[] = [
    {
        id: 1,
        status: "Active",
        gender: "male",
        email: "myEmail@mail.com",
        name: "Toto",
    },
    {
        id: 2,
        status: "deactivated",
        gender: "female",
        email: "myEmail@mail.com",
        name: "Paul",
    },
];
