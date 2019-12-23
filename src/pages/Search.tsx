import * as React from "react";
import {useState} from "react";
import * as LibraryBookController from "../common/controller/LibraryBookController";
import SearchList from "../organisms/SearchList";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchComponent from "../templates/SearchComponent";

const Search = () => {
    const [bookList] = useState(LibraryBookController.search());

    return (
        <DefaultTemplate title='도서 검색' loggedIn={true} profileIcon='visible'>
            <SearchComponent isSearchPage={true}/>
            <SearchList bookList={bookList}/>
        </DefaultTemplate>
    );
};

export default Search;