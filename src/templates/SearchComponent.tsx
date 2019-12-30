import * as React from "react";
import {useState} from "react";
import DefaultCard from "../organisms/DefaultCard";
import KeywordFrame from "../organisms/KeywordFrame";
import SearchBar from "../organisms/SearchBar";

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
        <DefaultCard elevation={true}>
            <SearchBar disabled={!props.isSearchPage}/>
            <KeywordFrame keywords={keywords}>최근 검색어</KeywordFrame>
        </DefaultCard>
    );
};

export default SearchComponent;