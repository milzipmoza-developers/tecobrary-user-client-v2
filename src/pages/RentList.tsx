import * as React from "react";
import {SyntheticEvent, useEffect, useState} from "react";
import Divider from "../atoms/Divider";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {IRentElement} from "../common/types/IRentElement";
import RentListBody from "../organisms/rentlist/RentListBody";
import RentListHeader from "../organisms/rentlist/RentListHeader";
import CommonSnackBar from "../templates/common/CommonSnackBar";
import DefaultTemplate from "../templates/DefaultTemplate";
import './css/rentlist.css';

const RentList = ({isLoggedIn, user, token}: any) => {
    const [rents, setRents] = useState<IRentElement[]>([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('info');

    useEffect(() => {
        setRentsFromServer();
    }, []);

    const setRentsFromServer = () => {
        if (isLoggedIn && user && token) {
            rentHistoryController
                .findRentListByUserId(user.id)
                .then((list: any) => {
                    setRents(list);
                })
                .catch((e: any) => {
                    snackBarBuilder('error', e.response.data.message);
                });
        }
    };

    const returnButtonHandler = (id: number) => async (e: any) => {
        if (user) {
            e.preventDefault();
            try {
                const data = await rentHistoryController.returnBook(user.id, id);
                setMessage(data.message);
                setVariant('info');
                setOpen(true);
                setRentsFromServer();
            } catch (e) {
                setMessage(e.response.data.message);
                setVariant('error');
                setOpen(true);
            }
        }
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
        <DefaultTemplate title='대여 현황' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <RentListHeader/>
                <Divider/>
                <RentListBody rents={rents} returnButtonHandler={returnButtonHandler}/>
            </div>
            <CommonSnackBar variant={variant} message={message}
                            open={open} handleClose={handleClose}/>
        </DefaultTemplate>
    );
};

export default RentList;