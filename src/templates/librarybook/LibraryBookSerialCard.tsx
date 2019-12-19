import * as React from "react";
import Divider from "../../atoms/Divider";
import QrCodeBlackIcon from "../../atoms/icons/QrCodeBlackIcon";
import {SerialDto} from "../../common/classes/SerialDto";
import TitledCard from "../TitledCard";

interface IProps {
    serials: SerialDto[]
}

const LibraryBookSerialCard = ({serials}: IProps) => (
    <TitledCard elevation={true}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {serials.map((serial: SerialDto, i: number) => (
                <div key={i}>
                    <div style={{display: 'flex', flexDirection: 'row', height: '50px'}}>
                        <div style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <div style={{textAlign: 'center'}}>
                                <QrCodeBlackIcon/>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flex: 3,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <div style={{textAlign: 'center'}}>
                                {serial.serialNumber}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <div style={{textAlign: 'center'}}>
                                {serial.status ? '대여중' : '비치중'}
                            </div>
                        </div>
                    </div>
                    <Divider/>
                </div>
            ))}
        </div>
    </TitledCard>
);

export default LibraryBookSerialCard;