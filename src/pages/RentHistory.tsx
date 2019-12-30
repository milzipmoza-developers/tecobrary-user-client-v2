import * as React from "react";
import {SyntheticEvent, useEffect, useState} from "react";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {ILoginInfo} from "../common/types/ILoginInfo";
import {RentHistoryProps} from "../organisms/renthistory/RentHistoryProps";
import RentHistoryList from "../organisms/RentHistoryList";
import CommonSnackBar from "../templates/common/CommonSnackBar";
import DefaultTemplate from "../templates/DefaultTemplate";

const RentHistory = ({isLoggedIn, user, token}: ILoginInfo) => {
    const [rentHistories, setRentHistories] = useState<RentHistoryProps[]>([]);

    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState('info');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setRentHistoriesFromServer();
    }, []);

    const setRentHistoriesFromServer = () => {
        if (isLoggedIn && user && token) {
            rentHistoryController
                .findReturnListByUserId(user.id)
                .then((response: any) => {
                    setRentHistories(response);
                })
                .catch((e) => {
                    snackBarBuilder('error', e.response.data.message);
                })
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
        <DefaultTemplate title='대여 기록' loggedIn={isLoggedIn} profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <div style={{height: '3vh'}}/>
            <RentHistoryList rentHistories={rentHistories}/>
            <CommonSnackBar variant={variant} message={message}
                            open={open} handleClose={handleClose}/>
        </DefaultTemplate>
    );
};

export default RentHistory;