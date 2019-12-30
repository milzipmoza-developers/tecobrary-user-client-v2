import * as React from "react";
import {SyntheticEvent, useEffect, useState} from "react";
import {BookInfoDto} from "../common/classes/BookInfoDto";
import {libraryBookController} from "../common/controller/LibraryBookController";
import BooksFooter from "../molecules/books/BooksFooter";
import BooksTable from "../organisms/books/BooksTable";
import CommonSnackBar from "../templates/common/CommonSnackBar";
import DefaultTemplate from "../templates/DefaultTemplate";

const PAGE_BOOK_NUMBERS = 12;

const Books = ({isLoggedIn, user}: any) => {
    const [books, setBooks] = useState<BookInfoDto[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState('info');
    const [message, setMessage] = useState('');

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
            .catch((e: any) => {
                snackBarBuilder('error', e.response.data.message);
            })
    };

    const getBooksTotal = () => {
        libraryBookController
            .getTotal()
            .then((response: any) => {
                setTotal(response);
            })
            .catch((e: any) => {
                snackBarBuilder('error', e.response.data.message);
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

    const snackBarBuilder = (vrt: string, msg: string) => {
        setVariant(vrt);
        setMessage(msg);
        setOpen(true);
    };

    const handleClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <DefaultTemplate title='장서 목록' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <BooksTable books={books}/>
                <BooksFooter upOnClick={pageUpButtonHandler} downOnClick={pageDownButtonHandler}/>
            </div>
            <CommonSnackBar variant={variant} message={message}
                            open={open} handleClose={handleClose}/>
        </DefaultTemplate>
    );
};

export default Books;