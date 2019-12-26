import * as React from "react";
import {useState} from "react";
import * as LibraryBookController from "../common/controller/LibraryBookController";
import {IUserInfo} from "../common/types/IUserInfo";
import SearchList from "../organisms/SearchList";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchComponent from "../templates/SearchComponent";

interface IProps {
    isLoggedIn: boolean;
    user: IUserInfo;
}

const Search = ({isLoggedIn, user}: IProps) => {
    const [bookList] = useState(LibraryBookController.search());

    return (
        <DefaultTemplate title='도서 검색' loggedIn={isLoggedIn} profileIcon='visible' imgUrl={user ? user.avatarUrl : undefined}>
            <SearchComponent isSearchPage={true}/>
            <SearchList bookList={bookList}/>
        </DefaultTemplate>
    );
};

export default Search;