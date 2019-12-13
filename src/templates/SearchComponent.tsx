import * as React from "react";
import {useState} from "react";
import DefaultCard from "../molecule/DefaultCard";
import KeywordFrame from "../organism/KeywordFrame";
import SearchBar from "../organism/SearchBar";

interface IProps {
    isSearchPage: boolean;
}

const SearchComponent = (props: IProps) => {
    const [keywords] = useState([
        '제목입니다1',
        '제목입니다2',
        '제목입니다3',
        '제목입니다4',
        '제목입니다5',
        '제목입니다6',
    ]);

    return (
        <DefaultCard elevation={!props.isSearchPage}>
            <SearchBar disabled={!props.isSearchPage}/>
            <KeywordFrame keywords={keywords}>최근 검색어</KeywordFrame>
        </DefaultCard>
    );
};

export default SearchComponent;