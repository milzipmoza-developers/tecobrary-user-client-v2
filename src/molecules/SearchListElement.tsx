import * as React from "react";
import SearchListCell from "../atoms/SearchListCell";

interface IBookProps {
    id: string;
    title: string;
    author: string;
    publisher: string;
}

interface IProps {
    id: string;
    book: IBookProps;
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