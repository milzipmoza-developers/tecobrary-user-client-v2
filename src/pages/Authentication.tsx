import {CircularProgress} from "@material-ui/core";
import * as queryString from "query-string";
import * as React from "react";
import {useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {userController} from "../common/controller/UserController";
import DefaultTemplate from "../templates/DefaultTemplate";
import "./css/authentication.css";

const Authentication = ({location}: any) => {
    const {code} = queryString.parse(location.search);
    const history = useHistory();

    useEffect(() => {
        if (!code) {
            window.location.href = "http://localhost:9090/github/user/oauth";
            return;
        }
        if (code.length !== 20) {
            history.push("/");
            return;
        }
        userController
            .authUser(code)
            .then((user) => {
                // tslint:disable-next-line:no-console
                console.log('user', user);
            })
            .catch((e: any) => {
                // tslint:disable-next-line:no-console
                console.log('error', e);
            });
    }, [code]);

    return (
        <DefaultTemplate title='로그인하는 중' loggedIn={false} profileIcon='hidden' visibleRentBtn='hidden'>
            <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <CircularProgress />
            </div>
        </DefaultTemplate>
    );
};

export default Authentication;