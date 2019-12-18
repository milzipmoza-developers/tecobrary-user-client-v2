import * as React from "react";
import {BookInfoDto} from "../../common/classes/BookInfoDto";
import BooksElementRow from "../../molecules/books/BooksRow";

interface IProps {
    books: BookInfoDto[]
}

const BooksTable = ({books}: IProps) => {
    const firstRow = books.splice(0, 3);
    const secondRow = books.splice(0, 3);
    const thirdRow = books.splice(0, 3);
    const fourthRow = books.splice(0, 3);

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <BooksElementRow books={firstRow}/>
            <BooksElementRow books={secondRow}/>
            <BooksElementRow books={thirdRow}/>
            <BooksElementRow books={fourthRow}/>
        </div>
    )
};

export default BooksTable;