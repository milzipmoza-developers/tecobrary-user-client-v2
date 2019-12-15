import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import QrCodeReader from "../pages/QrCodeReader";
import RentHistory from "../pages/RentHistory";
import Search from "../pages/Search";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={Main}/>
                <Route path='/search' component={Search}/>
                <Route path='/rents' component={QrCodeReader}/>
                <Route path='/mypage' component={MyPage}/>
                <Route path='/histories' component={RentHistory}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;