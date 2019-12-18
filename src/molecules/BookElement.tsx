import * as React from "react";
import Divider from "../atoms/Divider";
import {IBookInfo} from "../common/types";
import SearchListElement from "./SearchListElement";

interface IElementProps {
    book: IBookInfo;
    key: number;
    bookLength: number;
    onClick: any;
}

const BookElement = ({book, key, bookLength, onClick}: IElementProps) => (
    <div key={key}>
        <SearchListElement id={book.id} book={book} onClick={onClick}/>
        <Divider index={key} lastIndex={bookLength}/>
    </div>
);

export default BookElement;