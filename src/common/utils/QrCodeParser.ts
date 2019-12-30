import {ISerial} from "../types";

export const jsonParsing = (str: string) => {
    try {
        return JSON.parse(str);
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log('json parsing error', error);
        throw new Error('지원하지 않는 유형의 QR 코드입니다.')
    }
};

export const getSerial = (json: ISerial) => {
    if (!json.hasOwnProperty('serial')) {
        // tslint:disable-next-line:no-console
        console.log('don\'t have serial)');
        throw new Error('지원하지 않는 유형의 QR 코드입니다.')
    }
    // tslint:disable-next-line:no-console
    console.log(json);
    return json;
};