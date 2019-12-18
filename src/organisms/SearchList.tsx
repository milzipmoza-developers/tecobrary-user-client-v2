import * as React from "react";
import {CSSProperties, useState} from "react";
import {useHistory} from 'react-router-dom';
import {IBookInfo} from "../common/types";
import BookElement from "../molecules/BookElement";

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

    const history = useHistory();

    const searchListRowClick = (bookId: number) => () => {
        history.push(`/books/${bookId}`)
    };

    const BookList = () => books.map((book: IBookInfo, i: number) => (
        <BookElement book={book} key={i} bookLength={books.length} onClick={searchListRowClick(book.id)}/>
    ));

    const NoContent = () => (
        <div style={noContentStyle}>검색 결과가 없습니다.</div>
    );

    return (
        books.length !== 0 ?
            <BookList/> :
            <NoContent/>
    )
};

export default SearchList;