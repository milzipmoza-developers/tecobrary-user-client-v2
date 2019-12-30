import * as React from "react";
import {CSSProperties} from "react";
import LibraryBookElement from "../../atoms/librarybook/LibraryBookElement";

interface IProps {
    author?: string;
    publisher?: string;
    isbn?: string
}

const bookInfoStyle: CSSProperties = {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: 'lighter',
    justifyItems: 'center',
    marginLeft: '4px',
};

const LibraryBookInfo = ({author, publisher, isbn}: IProps) => (
    <div style={bookInfoStyle}>
        <LibraryBookElement hidden={true}>{author}</LibraryBookElement>
        <LibraryBookElement hidden={true}>{publisher}</LibraryBookElement>
        <LibraryBookElement hidden={false}>{isbn}</LibraryBookElement>
    </div>
);

export default LibraryBookInfo;