import * as React from "react";
import SearchListCell from "../atoms/SearchListCell";
import {IBookInfo} from "../common/types";

interface IProps {
    id: number;
    book: IBookInfo;
    onClick?: any;
}

const tableStyle = {
    display: 'table',
    padding: '4px',
    width: '100%',
};

const tableRowStyle = {
    display: 'table-row'
};

const SearchListElement = ({id, book, onClick}: IProps) => {
    return (
        <div key={id} style={tableStyle} onClick={onClick}>
            <div style={tableRowStyle}>
                <SearchListCell width='25vw' fontWeight='bold'>
                    {book.title}
                </SearchListCell>
                <SearchListCell width='10vw' fontWeight='normal'>
                    {book.author}
                </SearchListCell>
            </div>
            <div style={tableRowStyle}>
                <SearchListCell width='25vw' fontWeight='normal'/>
                <SearchListCell width='10vw' fontWeight='lighter' fontSize='12px'>
                    {book.publisher}
                </SearchListCell>
            </div>
        </div>
    );
};

export default SearchListElement;