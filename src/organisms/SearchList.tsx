import * as React from "react";
import {CSSProperties, useState} from "react";
import Divider from "../atoms/Divider";
import SearchListElement from "../molecules/SearchListElement";

interface IBookProps {
    id: string;
    title: string;
    author: string;
    publisher: string;
}

interface IProps {
    children?: any;
}

const noContentStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 'lighter',
    textAlign: 'center'
};

const SearchList = ({children}: IProps) => {
    const [books] = useState(children);

    const searchListRowClick = (bookId: string) => () => {
        alert('book id : ' + bookId);
    };

    const bookList = books.map((book: IBookProps, id: number) => (
        <div>
            <SearchListElement id={book.id} book={book} onClick={searchListRowClick(book.id)}/>
            <Divider index={id} lastIndex={books.length}/>
        </div>
    ));

    const noContent = (
        <div style={noContentStyle}>검색 결과가 없습니다.</div>
    );

    return (
        books.length !== 0 ?
            bookList :
            noContent
    )
};

export default SearchList;