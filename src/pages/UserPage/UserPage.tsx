import { UserPostList } from "@features/Posts/PostList/UserPostList";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useUserDetails } from "@features/User/UserDetails/useUserDetails";
import { UserDetails } from "@features/User/UserDetails/UserDetails";
import { genericErrorMessage } from "@constants";

export const UserPage = () => {
    const { userDetails, isLoading, error } = useUserDetails();

    if (error) {
        return <Typography>Error: {error.message?.toString() ?? genericErrorMessage}</Typography>;
    }

    return (
        <Container maxWidth="xl">
            {isLoading && <CircularProgress />}
            {userDetails && (
                <Box margin="auto" maxWidth={600}>
                    <UserDetails userDetails={userDetails} />
                </Box>
            )}
            <Box mt={4}>
                <UserPostList />
            </Box>
            TODO: Add the create post form
        </Container>
    );
};
