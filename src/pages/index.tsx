import {connect} from "react-redux";
import {authAction} from "../common/actions/authAction";
import {IUserInfo} from "../common/types/IUserInfo";
import Authentication from "./Authentication";
import Main from "./Main";
import MyPage from "./MyPage";
import QrCodeReader from "./QrCodeReader";
import Search from "./Search";

const mapStateToProps = (state: any) => {
    return state.auth;
};

const mapDispatchToProps = (dispatch: any) => ({
    login: (userInfo: IUserInfo, token: string) => dispatch(authAction.login(userInfo, token)),
    logout: () => dispatch(authAction.logout()),
});

export const MainPage = connect(mapStateToProps, null)(Main);
export const AuthenticationPage = connect(mapStateToProps, mapDispatchToProps)(Authentication);
export const SearchPage = connect(mapStateToProps, null)(Search);
export const QrCodeReaderPage = connect(mapStateToProps, null)(QrCodeReader);
export const MyPagePage = connect(mapStateToProps, mapDispatchToProps)(MyPage);