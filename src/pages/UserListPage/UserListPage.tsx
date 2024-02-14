import { UserList } from "@features/User/UserList/UserList";
import { Box, Button, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { useStyle } from "@pages/UserListPage/style";

export const UserListPage = () => {
    const classes = useStyle();
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <Fragment>
            <Box className={classes.header}>
                <Typography variant="h2">User list</Typography>
                <Button className={classes.addUserButton} variant="contained" onClick={() => setIsModalOpened(true)}>
                    Add a user
                </Button>
            </Box>
            <UserList isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
        </Fragment>
    );
};
