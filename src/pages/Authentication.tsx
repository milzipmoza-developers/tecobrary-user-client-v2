import {CircularProgress} from "@material-ui/core";
import * as queryString from "query-string";
import * as React from "react";
import {useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {userController} from "../common/controller/UserController";
import NoFooterTemplate from "../templates/NoFooterTemplate";
import "./css/authentication.css";

const Authentication = ({isLoggedIn, location, login}: any) => {
    const {code} = queryString.parse(location.search);
    const history = useHistory();

    useEffect(() => {
        if (isLoggedIn) {
            history.push("/");
            return;
        }
        if (!code) {
            window.location.href = "http://localhost:9090/github/user/oauth";
            return;
        }
        if (code.length !== 20) {
            history.push("/");
            return;
        }
        setAuthStoreFromServer();
        history.push("/");
    }, [code]);

    const setAuthStoreFromServer = () => {
        userController
            .authUser(code)
            .then((loginInfo) => {
                login(loginInfo.user, loginInfo.token);
                history.push("/");
            })
            .catch((e: any) => {
                // tslint:disable-next-line:no-console
                console.log('error', e);
                history.push("/");
            });
    };

    return (
        <NoFooterTemplate title='로그인하는 중' loggedIn={false} profileIcon='hidden'>
            <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <CircularProgress/>
            </div>
        </NoFooterTemplate>
    );
};

export default Authentication;