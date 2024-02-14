import useSWR from "swr";
import { userListApiRoute } from "@api-routes/users";
import { IUser } from "@features/User/IUser";
import { useState } from "react";
import { fetcher, IFetchResult } from "@utils/fetcher";

export const useUserList = () => {
    const [page, setPage] = useState(1);
    const {
        data: userList,
        error,
        mutate,
    } = useSWR<IFetchResult<IUser[]>, Error>(
        userListApiRoute(page),
        (url: string) => fetcher(url, undefined, true) as Promise<IFetchResult<IUser[]>>
    );

    const addUser = (user: IUser) => {
        mutate((previousUserList) => {
            if (!previousUserList?.data) {
                return undefined;
            }

            return { ...previousUserList, data: [...previousUserList.data, user] };
        });
    };

    return {
        userList: userList?.data,
        error,
        isLoading: !userList && !error,
        addUser,
        pagination: {
            totalPage: parseInt(userList?.headers.get("X-Pagination-Pages") ?? "0"),
            currentPage: page,
            setPage,
        },
    };
};
