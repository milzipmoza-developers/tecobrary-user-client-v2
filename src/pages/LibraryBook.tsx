import * as React from "react";
import {useEffect, useState} from "react";
import {BookInfoDto} from "../common/classes/BookInfoDto";
import {SerialDto} from "../common/classes/SerialDto";
import {libraryBookController} from "../common/controller/LibraryBookController";
import {serialController} from "../common/controller/SerialController";
import DefaultTemplate from "../templates/DefaultTemplate";
import LibraryBookCommentsCard from "../templates/librarybook/LibraryBookCommentsCard";
import LibraryBookInfoCard from "../templates/librarybook/LibraryBookInfoCard";
import LibraryBookSerialCard from "../templates/librarybook/LibraryBookSerialCard";

const LibraryBook = ({match, isLoggedIn, user}: any) => {
    const [bookId] = useState(match.params.bookId);
    const [book, setBook] = useState<BookInfoDto>(BookInfoDto.emptyInit());
    const [serials, setSerials] = useState<SerialDto[]>([]);

    useEffect(() => {
        libraryBookController.findById(bookId).then((bookInfo: BookInfoDto) => {
            setBook(bookInfo);
        }).catch((error: any) => {
            // tslint:disable-next-line:no-console
            console.error(error);
        });
    }, []);

    useEffect(() => {
        serialController.findSerialsByBookId(bookId).then((response: any) => {
            setSerials(response);
        }).catch((error: any) => {
            // tslint:disable-next-line:no-console
            console.error(error);
        })
    }, [bookId]);

    return (
        <DefaultTemplate title='도서 정보' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <LibraryBookInfoCard book={book}/>
            <LibraryBookSerialCard serials={serials}/>
            <LibraryBookCommentsCard/>
        </DefaultTemplate>
    );
};

export default LibraryBook;