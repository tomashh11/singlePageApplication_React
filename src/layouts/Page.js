import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import {ROUTES} from "../routes";

const Page = () => {
    return (
        <>
            <Switch>
                <Route path={`${ROUTES.home}`} exact component={HomePage}/>
                <Route path={`${ROUTES.contact}`} component={ContactPage}/>
                <Route path={`${ROUTES.products}`} component={ProductListPage}/>
                <Route path={`${ROUTES.product}/:id`} component={ProductPage}/>
                <Route path={`${ROUTES.admin}`} component={AdminPage}/>
                <Route path={`${ROUTES.login}`} component={LoginPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </>
    )
};

export default Page;