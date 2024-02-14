import useSWR from "swr";
import { userPostListApiRoute } from "@api-routes/users";
import { useParams } from "react-router-dom";
import { IUserPost } from "@features/Posts/IPost";

export const useUserPostList = () => {
    const { id } = useParams<{ id: string }>();
    const { data: userPostList, error } = useSWR<IUserPost[], Error>(id ? userPostListApiRoute(id) : null);

    return {
        userPostList,
        error,
        isLoading: !userPostList && !error,
    };
};
