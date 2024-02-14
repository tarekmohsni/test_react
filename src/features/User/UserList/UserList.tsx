import { useUserList } from "@features/User/UserList/useUserList";
import { Box, CircularProgress, Grid, Modal, Pagination, Typography } from "@mui/material";
import { generatePath, Link } from "react-router-dom";
import { USER_DETAILS_PAGE_URL } from "@appRoutes";
import { UserDetails } from "@features/User/UserDetails/UserDetails";
import { Fragment } from "react";
import { genericErrorMessage } from "@constants";
import { AddUser } from "@features/User/AddUser/AddUser";
import { IUser } from "@features/User/IUser";
import { useStyle } from "@features/User/UserList/style";

interface IParams {
    setIsModalOpened(isOpened: boolean): void;
    isModalOpened: boolean;
}

export const UserList = (props: IParams) => {
    const { setIsModalOpened, isModalOpened } = props;
    const { userList, isLoading, error, pagination, addUser } = useUserList();
    const classes = useStyle();

    const addUserSuccess = (user: IUser) => {
        setIsModalOpened(false);
        pagination.setPage(1);
        addUser(user);
    };

    if (error) {
        return <Typography>Error: {error.message?.toString() ?? genericErrorMessage}</Typography>;
    }

    return (
        <Fragment>
            {isLoading && <CircularProgress />}
            <Grid container spacing={4}>
                {userList?.map((user) => (
                    <Grid item key={user.id} lg={4} md={6} xs={12}>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={generatePath(USER_DETAILS_PAGE_URL, { id: user.id.toString() })}
                        >
                            <UserDetails userDetails={user} />
                        </Link>
                    </Grid>
                ))}
                {userList?.length === 0 && <Typography>No users</Typography>}
            </Grid>
            {userList?.length && (
                <Box display="flex" justifyContent="right" mt={4}>
                    <Pagination
                        color="primary"
                        count={pagination.totalPage}
                        page={pagination.currentPage}
                        onChange={(_event, value) => pagination.setPage(value)}
                    />
                </Box>
            )}
            <Modal open={isModalOpened} onClose={() => setIsModalOpened(false)}>
                <Box className={classes.modal}>
                    <Typography gutterBottom variant="h3">
                        Add a user
                    </Typography>
                    <AddUser handleSuccess={addUserSuccess} />
                </Box>
            </Modal>
        </Fragment>
    );
};
