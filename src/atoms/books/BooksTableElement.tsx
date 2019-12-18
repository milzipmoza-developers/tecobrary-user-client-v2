import * as React from "react";
import {useHistory} from "react-router";
import {BookInfoDto} from "../../common/classes/BookInfoDto";
import LibraryBookImage from "../librarybook/LibraryBookImage";

interface IProps {
    book: BookInfoDto;
}


const BooksTableElement = ({book}: IProps) => {
    const history = useHistory();

    const goBookInfoPage = (bookId: number) => () => {
        history.push(`/books/${bookId}`)
    };

    return (
        <div style={{flex: 1, cursor: 'pointer'}} onClick={goBookInfoPage(book.id)}>
            <LibraryBookImage image={book ? book.image : ''}/>
        </div>
    );
};

export default BooksTableElement;