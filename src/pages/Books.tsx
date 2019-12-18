import * as React from "react";
import {useEffect, useState} from "react";
import {BookInfoDto} from "../common/classes/BookInfoDto";
import {findBooksByPageAndNumber, getTotalBooks} from "../common/controller/LibraryBookController";
import BooksFooter from "../molecules/books/BooksFooter";
import BooksTable from "../organisms/books/BooksTable";
import DefaultTemplate from "../templates/DefaultTemplate";

const PAGE_BOOK_NUMBERS = 12;

const Books = () => {
    // @ts-ignore
    const [books, setBooks] = useState<BookInfoDto[]>([]);
    // @ts-ignore
    const [total, setTotal] = useState(getTotalBooks());
    // @ts-ignore
    const [page, setPage] = useState(1);

    useEffect(() => {
        setBooks(findBooksByPageAndNumber(page, 12))
    }, [page]);

    const pageUpButtonHandler = () => {
        if (page < total / PAGE_BOOK_NUMBERS) {
            setPage(page + 1);
        }
    };

    const pageDownButtonHandler = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <DefaultTemplate title='장서 목록' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <BooksTable books={books}/>
                <BooksFooter upOnClick={pageUpButtonHandler} downOnClick={pageDownButtonHandler}/>
            </div>
        </DefaultTemplate>
    );
};

export default Books;