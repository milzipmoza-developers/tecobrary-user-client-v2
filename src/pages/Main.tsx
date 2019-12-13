import * as React from "react";
import TitledCard from "../organism/TitledCard";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchComponent from "../templates/SearchComponent";

const Main = () => {
    return (
        <DefaultTemplate title='대시보드' loggedIn={false}>
            <SearchComponent isSearchPage={false}/>
            <TitledCard title='추천도서'>
                추천 도서 목록
            </TitledCard>
        </DefaultTemplate>
    )
};
export default Main;