import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { MainRoute } from "@pages/MainRoute";
import { CSS_PAGE_URL, HOME_PAGE_URL, USER_DETAILS_PAGE_URL, USER_PAGE_URL } from "@appRoutes";
import { CSSPage } from "@pages/CSSPage/CSSPage";
import { HomePage } from "@pages/HomePage";
import { UserPage } from "@pages/UserPage/UserPage";
import { UserListPage } from "@pages/UserListPage/UserListPage";

export const Routes = () => (
    <Switch>
        <Route element={<MainRoute />} path={HOME_PAGE_URL}>
            <Route element={<UserListPage />} path={USER_PAGE_URL} />
            <Route element={<UserPage />} path={USER_DETAILS_PAGE_URL} />
            <Route element={<HomePage />} path={HOME_PAGE_URL} />
        </Route>
        <Route element={<CSSPage />} path={CSS_PAGE_URL} />
        <Route element={<Navigate replace to={HOME_PAGE_URL} />} path="*" />
    </Switch>
);
