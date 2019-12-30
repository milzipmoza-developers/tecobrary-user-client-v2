import * as React from "react";
import * as QrReader from "react-qr-reader";
import {BORDER_DEFAULT_GRAY} from "../../common/colors";

interface IProps {
    handleScan: any;
    handleError: any;
}

const qrReaderStyle = {
    border: '1px solid',
    borderColor: BORDER_DEFAULT_GRAY,
    borderRadius: '10px',
    maxWidth: '450px',
    minWidth: '250px'
};

const RentBookQrCodeReader = ({handleScan, handleError}: IProps) => (
    <QrReader onScan={handleScan} onError={handleError} showViewFinder={false} style={qrReaderStyle}/>
);

export default RentBookQrCodeReader;