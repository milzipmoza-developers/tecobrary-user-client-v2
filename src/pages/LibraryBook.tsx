import * as React from "react";
import {SyntheticEvent, useEffect, useState} from "react";
import {BookInfoDto} from "../common/classes/BookInfoDto";
import {SerialDto} from "../common/classes/SerialDto";
import {libraryBookController} from "../common/controller/LibraryBookController";
import {serialController} from "../common/controller/SerialController";
import CommonSnackBar from "../templates/common/CommonSnackBar";
import DefaultTemplate from "../templates/DefaultTemplate";
import LibraryBookCommentsCard from "../templates/librarybook/LibraryBookCommentsCard";
import LibraryBookInfoCard from "../templates/librarybook/LibraryBookInfoCard";
import LibraryBookSerialCard from "../templates/librarybook/LibraryBookSerialCard";

const LibraryBook = ({match, isLoggedIn, user}: any) => {
    const [bookId] = useState(match.params.bookId);
    const [book, setBook] = useState<BookInfoDto>(BookInfoDto.emptyInit());
    const [serials, setSerials] = useState<SerialDto[]>([]);

    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState('info');
    const [message, setMessage] = useState('');

    useEffect(() => {
        libraryBookController
            .findById(bookId)
            .then((bookInfo: BookInfoDto) => {
                setBook(bookInfo);
            })
            .catch((e: any) => {
                snackBarBuilder('error', e.response.data.message);
            });
    }, []);

    useEffect(() => {
        serialController
            .findSerialsByBookId(bookId)
            .then((response: any) => {
                setSerials(response);
            })
            .catch((e: any) => {
                snackBarBuilder('error', e.response.data.message);
            })
    }, [bookId]);

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
        <DefaultTemplate title='도서 정보' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <LibraryBookInfoCard book={book}/>
            <LibraryBookSerialCard serials={serials}/>
            <LibraryBookCommentsCard/>
            <CommonSnackBar variant={variant} message={message}
                            open={open} handleClose={handleClose}/>
        </DefaultTemplate>
    );
};

export default LibraryBook;