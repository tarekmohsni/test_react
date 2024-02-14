import useSWR from "swr";
import { userApiRoute } from "@api-routes/users";
import { IUser } from "@features/User/IUser";
import { useParams } from "react-router-dom";

export const useUserDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: userDetails, error } = useSWR<IUser, Error>(id ? userApiRoute(id) : null);

    return {
        userDetails,
        error,
        isLoading: !userDetails && !error,
    };
};
