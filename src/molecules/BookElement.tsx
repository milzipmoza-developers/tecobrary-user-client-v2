import * as React from "react";
import Divider from "../atoms/Divider";
import {IBookInfo} from "../common/types";
import SearchListElement from "./SearchListElement";

interface IElementProps {
    book: IBookInfo;
    index: number;
    bookLength: number;
    onClick: any;
}

const BookElement = ({book, index, bookLength, onClick}: IElementProps) => (
    <div>
        <SearchListElement id={book.id} book={book} onClick={onClick}/>
        <Divider index={index} lastIndex={bookLength}/>
    </div>
);

export default BookElement;