import * as React from "react";
import {CSSProperties} from "react";
import {IBookInfo} from "../common/types";
import BookElement from "../molecules/BookElement";

interface IProps {
    bookList?: any;
    onClick?: any;
}

const noContentStyle: CSSProperties = {
    fontSize: '14px',
    fontWeight: 'lighter',
    textAlign: 'center'
};

const SearchList = ({bookList, onClick}: IProps) => {
    const BookList = () => bookList.map((book: IBookInfo, i: number) => (
        <BookElement key={i} index={i} book={book} bookLength={bookList.length}
                     onClick={onClick ? onClick(i): null}/>
    ));

    const NoContent = () => (
        <div style={noContentStyle}>검색 결과가 없습니다.</div>
    );

    return (
        bookList.length !== 0 ?
            <BookList/> :
            <NoContent/>
    )
};

export default SearchList;