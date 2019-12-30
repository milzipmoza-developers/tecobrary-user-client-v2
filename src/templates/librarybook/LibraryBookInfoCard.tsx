import * as React from "react";
import LibraryBookImage from "../../atoms/librarybook/LibraryBookImage";
import {IBookInfo} from "../../common/types";
import LibraryBookInfo from "../../molecules/librarybook/LibraryBookInfo";
import TitledCard from "../TitledCard";

interface IProps {
    book: IBookInfo;
}

const LibraryBookInfoCard = ({book}: IProps) => (
    <TitledCard title={book.title} elevation={true}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <LibraryBookImage image={book.image}/>
                <LibraryBookInfo author={book.author} isbn={book.isbn} publisher={book.publisher}/>
            </div>
            <div style={{
                fontSize: '14px',
                fontWeight: 'lighter',
                height: '100px',
                overflow: 'hidden',
                paddingTop: '8px',
            }}>
                {book.description}
            </div>
        </div>
    </TitledCard>
);

export default LibraryBookInfoCard;