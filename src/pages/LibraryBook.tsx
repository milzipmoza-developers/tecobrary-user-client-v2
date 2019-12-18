import * as React from "react";
import {useEffect, useState} from "react";
import {BookInfoDto} from "../common/classes/BookInfoDto";
import {SerialDto} from "../common/classes/SerialDto";
import * as LibraryBookController from "../common/controller/LibraryBookController";
import * as SerialController from "../common/controller/SerialController"
import DefaultTemplate from "../templates/DefaultTemplate";
import LibraryBookCommentsCard from "../templates/librarybook/LibraryBookCommentsCard";
import LibraryBookInfoCard from "../templates/librarybook/LibraryBookInfoCard";
import LibraryBookSerialCard from "../templates/librarybook/LibraryBookSerialCard";

const LibraryBook = ({match}: any) => {
    const [bookId] = useState(match.params.bookId);
    const [book, setBook] = useState<BookInfoDto>(BookInfoDto.emptyInit());
    const [serials, setSerials] = useState<SerialDto[]>([]);

    useEffect(() => {
        setBook(LibraryBookController.findById(bookId));
    }, [bookId]);

    useEffect(() => {
        setSerials(SerialController.findSerialsByBookId(bookId));
    }, [bookId]);

    return (
        <DefaultTemplate title='도서 정보' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <LibraryBookInfoCard book={book}/>
            <LibraryBookSerialCard serials={serials}/>
            <LibraryBookCommentsCard/>
        </DefaultTemplate>
    );
};

export default LibraryBook;