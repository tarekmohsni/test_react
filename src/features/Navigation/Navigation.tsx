import { Link } from "react-router-dom";
import { CSS_PAGE_URL, HOME_PAGE_URL, USER_PAGE_URL } from "@appRoutes";
import { useStyle } from "@features/Navigation/style";

export const Navigation = () => {
    const classes = useStyle();

    return (
        <div className={classes.nav}>
            <Link to={HOME_PAGE_URL}>Home</Link>
            <Link to={USER_PAGE_URL}>Users</Link>
            <Link to={CSS_PAGE_URL}>CSS</Link>
        </div>
    );
};
