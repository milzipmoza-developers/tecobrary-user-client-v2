import * as React from "react";
import SearchList from "../organisms/SearchList";
import TitledCard from "../organisms/TitledCard";

interface IProps {
    bookList: any;
}

const SearchListCard = ({bookList}: IProps) => {
    return (
        <TitledCard elevation={false}>
            <SearchList>{bookList}</SearchList>
        </TitledCard>
    );
};

export default SearchListCard;