import * as React from "react";
import SearchList from "../organisms/SearchList";

interface IProps {
    bookList: any;
    itemOnClick?: any;
}

const SearchListCard = ({bookList, itemOnClick}: IProps) => {
    return (
        <div style={{paddingRight: '4px', paddingLeft: '4px'}}>
            <SearchList bookList={bookList} onClick={itemOnClick}/>
        </div>
    );
};

export default SearchListCard;