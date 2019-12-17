import {BookInfoDto} from "../classes/BookInfoDto";
import {ISerial} from "../types";

export const findBookBySerialNumber = (serialNumber: ISerial) => {
    // TODO: findBookBySerialNumber from server
    return new BookInfoDto(
        1,
        'https://bookthumb-phinf.pstatic.net/cover/091/459/09145968.jpg?type=m1&udate=20171011',
        '객체지향의 사실과 오해 (역할, 책임, 협력 관점에서 본 객체지향)',
        '조영호',
        '위키북스',
        '객체지향에 대한 선입견을 버려라!『객체지향의 사실과 오해』는 객체지향이란 무엇인가라는 원론적면서도 다소 위험한 질문에 답하기 위해 쓰여진 책이다. 안타깝게도 많은 사람들이 객체지향의 본질을 오해하고 있다. 가장 널리 퍼져있는 오해는 클래스가 객체지향 프로그래밍의 중심이라는 것이다.... ',
        '8998139766 9788998139766',
    );
};