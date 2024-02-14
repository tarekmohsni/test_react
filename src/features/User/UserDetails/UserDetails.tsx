import { Typography } from "@mui/material";
import { IUser } from "@features/User/IUser";
import { useStyle } from "@features/User/UserDetails/style";
import { InlineItem } from "@common/InlineItem/InlineItem";

interface IParams {
    userDetails: IUser;
}

export const UserDetails = (props: IParams) => {
    const { userDetails } = props;
    const classes = useStyle();

    return (
        <div className={classes.user}>
            <Typography variant="h3">{userDetails.name}</Typography>
            <InlineItem label="Email" value={userDetails.email} />
            <InlineItem label="Gender" value={userDetails.gender} />
            <InlineItem label="Status" value={userDetails.status} />
        </div>
    );
};
