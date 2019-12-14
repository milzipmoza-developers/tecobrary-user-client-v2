import * as React from "react";
import * as QrReader from 'react-qr-reader';
import DefaultTemplate from "../templates/DefaultTemplate";
import TitledCard from "../templates/TitledCard";

const QrCodeReader = () => {
    const handleScan = (data: any) => {
        if (data) {
            // TODO: Request Rent
            // tslint:disable-next-line:no-console
            console.log(data);
        }
    };

    const handleError = (error: Error) => {
        // tslint:disable-next-line:no-console
        console.error(error)
    };

    return (
        <DefaultTemplate title='대여하기' loggedIn={false} visibleRentBtn='hidden' profileIcon='visible'>
            <TitledCard>
                <QrReader onScan={handleScan} onError={handleError}/>
            </TitledCard>
        </DefaultTemplate>
    )
};

export default QrCodeReader;