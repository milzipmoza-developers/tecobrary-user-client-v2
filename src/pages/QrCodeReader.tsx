import * as React from "react";
import {useEffect, useState} from "react";
import QrCodeMessageHolder from "../atoms/QrCodeMessageHolder";
import RentBookQrCodeReader from "../atoms/rentbook/RentBookQrCodeReader";
import {BookInfoDto} from "../common/classes/BookInfoDto";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {serialController} from "../common/controller/SerialController";
import {IBookInfo} from "../common/types";
import {ILoginInfo} from "../common/types/ILoginInfo";
import * as QrCodeParser from "../common/utils/QrCodeParser";
import {DialogProps, ErrorDialogProps, SuccessDialogProps} from "../organisms/rentbook";
import NoFooterTemplate from "../templates/NoFooterTemplate";
import RentBookDialog from "../templates/rentbook/RentBookDialog";
import TitledCard from "../templates/TitledCard";

const CAMERA_GRANT_ERROR_MESSAGE = '카메라 권한에 접근하지 못하였습니다.';
const QR_READER_ERROR_MESSAGE = 'QR 코드 리더기에 문제가 발생하였습니다.';

const QrCodeReader = ({isLoggedIn, user, token}: ILoginInfo) => {
    const [dialog, setDialog] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [serial, setSerial] = useState(-1);
    const [bookInfo, setBookInfo] = useState<BookInfoDto | null>(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [dialogProps, setDialogProps] = useState<DialogProps>();

    useEffect(() => {
        if (scanned) {
            setDialogProps(new SuccessDialogProps(bookInfo, serial, confirmButtonHandler, cancelButtonHandler));
            setDialog(dialog);
        } else {
            setRentStates(-1, null, false, false);
        }
    }, [scanned]);

    useEffect(() => {
        setErrorMessage(errorMessage);
    }, [error]);

    const handleScan = async (data: any) => {
        if (data && serial === -1) {
            try {
                const jsonData = QrCodeParser.jsonParsing(data);
                const serialObject = QrCodeParser.getSerial(jsonData);
                const response = await serialController.findBookBySerialNumber(serialObject);
                setRentStates(serialObject.serial, response, true, true);
            } catch (e) {
                invokeErrorDialog(e.message ? e.message : e.response.data.message);
                setRentStates(-1, null, false, false);
            }
        }
    };

    const setRentStates = (serialNumber: number, book: IBookInfo | null, dialogStatus: boolean, scanStatus: boolean) => {
        setSerial(serialNumber);
        setBookInfo(book);
        setDialog(dialogStatus);
        setScanned(scanStatus);
    };

    const invokeErrorDialog = (message: string) => {
        setDialogProps(new ErrorDialogProps(message, cancelButtonHandler));
        setDialog(true);
    };

    const handleError = (e: Error) => {
        if (e.name === 'NotAllowedError') {
            invokeQrReaderError(CAMERA_GRANT_ERROR_MESSAGE);
            return;
        }
        invokeQrReaderError(QR_READER_ERROR_MESSAGE);
    };

    const invokeQrReaderError = (message: string) => {
        setErrorMessage(message);
        setError(true);
    };

    const confirmButtonHandler = async () => {
        // TODO: user id setting from redux
        try {
            const response = await rentHistoryController.rentBook(1, serial);
            // tslint:disable-next-line:no-console
            console.log(response.message, response.rentInfo.title);
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e.response);
            invokeErrorDialog(e.response.data.message);
            setRentStates(-1, null, false, false);
        }
    };

    const cancelButtonHandler = () => {
        setRentStates(-1, null, false, false);
    };

    return (
        <NoFooterTemplate title='대여하기' loggedIn={isLoggedIn} profileIcon='visible' imgUrl={user ? user.avatarUrl : undefined}>
            <TitledCard>
                <RentBookQrCodeReader handleScan={handleScan} handleError={handleError}/>
                <div>
                    {error ? <QrCodeMessageHolder message={errorMessage}/> : null}
                </div>
            </TitledCard>
            {dialog ? <RentBookDialog dialogProps={dialogProps}/> : null}
        </NoFooterTemplate>
    )
};

export default QrCodeReader;