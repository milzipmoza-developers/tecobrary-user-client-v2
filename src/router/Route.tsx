import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Books from "../pages/Books";
import LibraryBook from "../pages/LibraryBook";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import QrCodeReader from "../pages/QrCodeReader";
import Recommend from "../pages/Recommend";
import RentHistory from "../pages/RentHistory";
import RentList from "../pages/RentList";
import Search from "../pages/Search";
import WishBook from "../pages/WishBook";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={Main}/>
                <Route path='/search' component={Search}/>
                <Route path='/rents' component={QrCodeReader}/>
                <Route path='/mypage' component={MyPage}/>
                <Route path='/histories' component={RentHistory}/>
                <Route path='/books/:bookId' component={LibraryBook}/>
                <Route path='/books' component={Books}/>
                <Route path='/wishes' component={WishBook}/>
                <Route path='/recommends' component={Recommend}/>
                <Route path='/rentlists' component={RentList}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;