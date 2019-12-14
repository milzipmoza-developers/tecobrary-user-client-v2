import * as React from "react";
import * as QrReader from 'react-qr-reader';
import TitledCard from "../organisms/TitledCard";
import DefaultTemplate from "../templates/DefaultTemplate";

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
        <DefaultTemplate title='대여하기' loggedIn={false} visibleRentBtn='hidden'>
            <TitledCard>
                <QrReader onScan={handleScan} onError={handleError}/>
            </TitledCard>
        </DefaultTemplate>
    )
};

export default QrCodeReader;