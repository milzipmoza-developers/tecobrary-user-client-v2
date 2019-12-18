import * as React from "react";
import {useState} from "react";
import * as NaverApiController from "../common/controller/NaverApiController";
import DefaultCard from "../organisms/DefaultCard";
import SearchBar from "../organisms/SearchBar";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchListCard from "../templates/SearchListCard";

const WishBook = () => {
    const [bookList] = useState(NaverApiController.searchBook());

    return (
        <DefaultTemplate title='희망도서 신청' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <DefaultCard elevation={true}>
                <div style={{marginTop: '8px', marginBottom: '8px'}}>
                    <SearchBar disabled={false}/>
                </div>
            </DefaultCard>
            <SearchListCard bookList={bookList}/>
        </DefaultTemplate>
    );
};

export default WishBook;
