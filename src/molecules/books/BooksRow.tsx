import * as React from "react";
import BooksTableElement from "../../atoms/books/BooksTableElement";
import {BookInfoDto} from "../../common/classes/BookInfoDto";

interface IProps {
    books: BookInfoDto[]
}

const BooksElementRow = ({books}: IProps) => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        {books.map((book: BookInfoDto, i: number) => (
            <BooksTableElement book={book} key={i}/>
        ))}
    </div>
);

export default BooksElementRow