import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useUserPostList } from "@features/Posts/PostList/useUserPostList";
import { Fragment } from "react";
import { useStyle } from "./styles";

export const UserPostList = () => {
    const { userPostList, isLoading, error } = useUserPostList();
    const classes = useStyle();

    if (error) {
        return <Typography>Error: {error.message}</Typography>;
    }

    return (
        <Fragment>
            <Typography mb={2} variant="h3">
                My posts
            </Typography>
            {isLoading && <CircularProgress />}
            {userPostList?.map((post) => (
                <Card className={classes.postList} key={post.id}>
                    <CardContent>
                        <Typography variant="h4">{post.title}</Typography>
                        <Typography>{post.body}</Typography>
                    </CardContent>
                </Card>
            ))}
            {userPostList?.length === 0 && <Typography>No posts available for this user</Typography>}
        </Fragment>
    );
};
