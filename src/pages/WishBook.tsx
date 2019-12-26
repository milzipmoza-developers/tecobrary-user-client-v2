import * as React from "react";
import {SyntheticEvent, useEffect, useState} from "react";
import {WishBookDto} from "../common/classes/WishBookDto";
import {SearchContext} from '../common/contexts/SearchContext';
import {naverApiController} from "../common/controller/NaverApiController";
import {wishBookController} from "../common/controller/WishBookController";
import {IBookProps} from "../common/types/ILibraryBook";
import DefaultCard from "../organisms/DefaultCard";
import SearchBar from "../organisms/SearchBar";
import CommonSnackBar from "../templates/common/CommonSnackBar";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchListCard from "../templates/SearchListCard";
import WishBookRequestDialog from "../templates/WishBookRequestDialog";

const WishBook = ({isLoggedIn, user, token}: any) => {
    const [bookList, setBookList] = useState<IBookProps[]>([]);
    const [keyword, setKeyword] = useState('');
    const [selectedBook, setSelectedBook] = useState<any>();
    const [openDialog, setOpenDialog] = useState(false);

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('info');

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
        setOpenDialog(true);
    };

    const handleConfirmButton = async (e: any) => {
        e.preventDefault();
        const {image, title, author, publisher, isbn, description} = selectedBook;
        try {
            const wishbook = await wishBookController.createWishBook(new WishBookDto(image, title, author, publisher, isbn, description, 1));
            snackBarBuilder('success', `${wishbook.title} 이 희망도서에 등록되었습니다.`);
            setOpenDialog(false);
        } catch (e) {
            snackBarBuilder('warning', e.response.data.message);
            setOpenDialog(false);
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const snackBarBuilder = (vrt: string, msg: string) => {
        setVariant(vrt);
        setMessage(msg);
        setOpen(true);
    };

    return (
        <DefaultTemplate title='희망도서 신청' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <DefaultCard elevation={true}>
                <div style={{marginTop: '8px', marginBottom: '8px'}}>
                    <SearchContext.Provider value={{keyword, onInputChange, onKeyUp}}>
                        <SearchBar disabled={false}/>
                    </SearchContext.Provider>
                </div>
            </DefaultCard>
            <SearchListCard bookList={bookList} itemOnClick={itemOnClick}/>
            <WishBookRequestDialog selectedBook={selectedBook} open={openDialog} closeOnClick={handleCloseDialog}
                                   confirmOnClick={handleConfirmButton}/>
            <CommonSnackBar variant={variant} message={message}
                            open={open} handleClose={handleClose}/>
        </DefaultTemplate>
    );
};

export default WishBook;
