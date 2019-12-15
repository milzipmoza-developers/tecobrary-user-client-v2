import * as React from "react";
import {useState} from "react";
import * as QrReader from 'react-qr-reader';
import {BORDER_DEFAULT_GRAY} from "../common/colors";
import NoFooterTemplate from "../templates/NoFooterTemplate";
import SimpleDialog from "../templates/SimpleDialog";
import TitledCard from "../templates/TitledCard";

const QrCodeReader = () => {
    const [dialog, setDialog] = useState(true);

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

    const tempScanButtonHandler = () => {
        if (!dialog) {
            setDialog(true);
        } else {
            setDialog(false);
        }
        // tslint:disable-next-line:no-console
        console.log('set dialog true')
    };

    return (
        <NoFooterTemplate title='대여하기' loggedIn={false} profileIcon='visible'>
            <TitledCard>
                <QrReader onScan={handleScan} onError={handleError} showViewFinder={false}
                          style={{
                              border: '1px solid',
                              borderColor: BORDER_DEFAULT_GRAY,
                              borderRadius: '10px',
                              maxWidth: '450px',
                              minWidth: '250px'
                          }}/>
                <div style={{width: '50px', height: '50px', fontSize: '20px', cursor: 'pointer'}}
                     onClick={tempScanButtonHandler}>스캔
                </div>
            </TitledCard>
            {dialog ?
                <SimpleDialog
                    title='확인하기'
                    mode='success'
                    confirmOnClick={tempScanButtonHandler}
                    cancelOnClick={tempScanButtonHandler}>
                    ㅇㅇ
                </SimpleDialog> : null}
        </NoFooterTemplate>
    )
};

export default QrCodeReader;