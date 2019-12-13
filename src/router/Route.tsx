import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../pages/Main";
import Search from "../pages/Search";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={Main}/>
                <Route path='/search' component={Search}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;