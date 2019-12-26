import * as React from "react";
import {useEffect, useState} from "react";
import {BookInfoDto} from "../common/classes/BookInfoDto";
import {libraryBookController} from "../common/controller/LibraryBookController";
import BooksFooter from "../molecules/books/BooksFooter";
import BooksTable from "../organisms/books/BooksTable";
import DefaultTemplate from "../templates/DefaultTemplate";

const PAGE_BOOK_NUMBERS = 12;

const Books = ({isLoggedIn, user}: any) => {
    // @ts-ignore
    const [books, setBooks] = useState<BookInfoDto[]>([]);
    // @ts-ignore
    const [total, setTotal] = useState(0);
    // @ts-ignore
    const [page, setPage] = useState(1);

    useEffect(() => {
        getBooksTotal();
        getBooksOnPage();
    }, []);

    useEffect(() => {
        getBooksOnPage();
    }, [page]);

    const getBooksOnPage = () => {
        libraryBookController
            .getPageBooks(page)
            .then((response: any) => {
                setBooks(response);
            })
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.error(error);
            })
    };

    const getBooksTotal = () => {
        libraryBookController
            .getTotal()
            .then((response: any) => {
                setTotal(response);
            })
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.error(error);
            });
    };

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
        <DefaultTemplate title='장서 목록' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <BooksTable books={books}/>
                <BooksFooter upOnClick={pageUpButtonHandler} downOnClick={pageDownButtonHandler}/>
            </div>
        </DefaultTemplate>
    );
};

export default Books;