import * as React from "react";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {WishBookDto} from "../common/classes/WishBookDto";
import {SearchContext} from '../common/contexts/SearchContext';
import {naverApiController} from "../common/controller/NaverApiController";
import {wishBookController} from "../common/controller/WishBookController";
import {IBookProps} from "../common/types/ILibraryBook";
import DefaultCard from "../organisms/DefaultCard";
import SearchBar from "../organisms/SearchBar";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchListCard from "../templates/SearchListCard";
import WishBookRequestDialog from "../templates/WishBookRequestDialog";

const WishBook = () => {
    const [bookList, setBookList] = useState<IBookProps[]>([]);
    const [keyword, setKeyword] = useState('');
    const [selectedBook, setSelectedBook] = useState<any>();
    const [open, setOpen] = useState(false);

    const history = useHistory();

    useEffect(() => {
        setBookList(bookList);
    }, []);

    const onInputChange = (e: any) => {
        setKeyword(e.target.value);
    };

    const onKeyUp = async (e: any) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            try {
                const books = await naverApiController.search(keyword, 1, 10);
                setBookList(books);
            } catch (e) {
                // tslint:disable-next-line:no-console
                console.log(e.message)
            }
        }
    };

    const itemOnClick = (id: number) => (e: any) => {
        e.preventDefault();
        setSelectedBook(bookList[id]);
        handleOpen()
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleConfirmButton = async (e: any) => {
        e.preventDefault();
        const {image, title, author, publisher, isbn, description} = selectedBook;
        try {
            const wishbook = await wishBookController.createWishBook(new WishBookDto(image, title, author, publisher, isbn, description, 1));
            // tslint:disable-next-line:no-console
            console.log('wishbook', wishbook);
            history.push("/");
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DefaultTemplate title='희망도서 신청' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <DefaultCard elevation={true}>
                <div style={{marginTop: '8px', marginBottom: '8px'}}>
                    <SearchContext.Provider value={{keyword, onInputChange, onKeyUp}}>
                        <SearchBar disabled={false}/>
                    </SearchContext.Provider>
                </div>
            </DefaultCard>
            <SearchListCard bookList={bookList} itemOnClick={itemOnClick}/>
            <WishBookRequestDialog selectedBook={selectedBook} open={open} closeOnClick={handleClose} confirmOnClick={handleConfirmButton}/>
        </DefaultTemplate>
    );
};

export default WishBook;
