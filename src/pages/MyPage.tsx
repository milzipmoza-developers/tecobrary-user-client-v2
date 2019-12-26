import * as React from "react";
import {SyntheticEvent, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {RentHistoryProps} from "../organisms/renthistory/RentHistoryProps";
import CommonSnackBar from "../templates/common/CommonSnackBar";
import DefaultTemplate from "../templates/DefaultTemplate";
import MyPageBadgeCard from "../templates/MyPageBadgeCard";
import MyPageRentHistoryCard from "../templates/MyPageRentHistoryCard";
import MyPageUserInfoCard from "../templates/MyPageUserInfoCard";

const MyPage = ({isLoggedIn, user, token, logout}: any) => {
    const [rentHistories, setRentHistories] = useState<RentHistoryProps[]>([]);

    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState('info');
    const [message, setMessage] = useState('');

    const history = useHistory();

    useEffect(() => {
        setRentHistoriesFromServer();
    }, []);

    const setRentHistoriesFromServer = () => {
        if (isLoggedIn && user) {
            rentHistoryController
                .findReturnListByUserId(user.id)
                .then((response: any) => {
                    setRentHistories(response);
                })
                .catch((e) => {
                    snackBarBuilder('error', e.response.data.message);
                });
        }
    };

    const logoutButtonHandler = () => {
        logout();
        history.push('/');
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
        <DefaultTemplate title='마이페이지' loggedIn={isLoggedIn} profileIcon='hidden'>
            <MyPageUserInfoCard user={user ? user : null} logoutButtonHandler={logoutButtonHandler}/>
            <MyPageRentHistoryCard
                rentHistories={rentHistories}/>
            <MyPageBadgeCard/>
            <CommonSnackBar variant={variant} message={message}
                            open={open} handleClose={handleClose}/>
        </DefaultTemplate>
    );
};

export default MyPage;