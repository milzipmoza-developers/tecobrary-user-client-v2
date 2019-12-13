import * as React from "react";
import TitledCard from "../organism/TitledCard";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchComponent from "../templates/SearchComponent";

const Search = () => {
    return (
        <DefaultTemplate title='도서 검색' loggedIn={true}>
            <SearchComponent isSearchPage={true}/>
            <TitledCard>
                {/* TODO: 목록 구현 */}
                <div>1번</div>
            </TitledCard>
        </DefaultTemplate>
    );
};

export default Search;