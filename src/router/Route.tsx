import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {
    AuthenticationPage,
    BooksPage,
    LibraryBookPage,
    MainPage,
    MyPagePage,
    QrCodeReaderPage,
    RentHistoryPage,
    SearchPage
} from "../pages";
import Recommend from "../pages/Recommend";
import RentList from "../pages/RentList";
import WishBook from "../pages/WishBook";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={MainPage}/>
                <Route path='/search' component={SearchPage}/>
                <Route path='/rents' component={QrCodeReaderPage}/>
                <Route path='/mypage' component={MyPagePage}/>
                <Route path='/histories' component={RentHistoryPage}/>
                <Route path='/books/:bookId' component={LibraryBookPage}/>
                <Route path='/books' component={BooksPage}/>
                <Route path='/wishes' component={WishBook}/>
                <Route path='/recommends' component={Recommend}/>
                <Route path='/rentlists' component={RentList}/>
                <Route path='/authenticate' component={AuthenticationPage}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;