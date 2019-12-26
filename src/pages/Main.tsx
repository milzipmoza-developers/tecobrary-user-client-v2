import * as React from "react";
import {SyntheticEvent, useEffect, useState} from "react";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {IRentElement} from "../common/types/IRentElement";
import CommonSnackBar from "../templates/common/CommonSnackBar";
import DefaultTemplate from "../templates/DefaultTemplate";
import MainRentListCard from "../templates/main/MainRentListCard";
import MainRecommendCard from "../templates/MainRecommendCard";
import SearchComponent from "../templates/SearchComponent";

interface IProps {
    state: any;
    isLoggedIn: any,
    user: any,
}

const Main = ({isLoggedIn, user}: IProps) => {
    const [rents, setRents] = useState<IRentElement[]>([]);
    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState('info');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setRentsFromServer();
    }, []);

    const setRentsFromServer = () => {
        if (isLoggedIn) {
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
        <DefaultTemplate title='대시보드' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : null}>
            <SearchComponent isSearchPage={false}/>
            <MainRentListCard loggedIn={isLoggedIn ? isLoggedIn : false} rents={rents}/>
            <MainRecommendCard/>
            <CommonSnackBar variant={variant} message={message}
                            open={open} handleClose={handleClose}/>
        </DefaultTemplate>
    )
};

export default Main;