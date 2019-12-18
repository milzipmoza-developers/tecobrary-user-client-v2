import {BookInfoDto} from "../classes/BookInfoDto";
import {IBookProps} from "../types/ILibraryBook";

export const search = () => {
    const dummyBookList: IBookProps[] = [
        {id: '1', title: '객체 지향의 사실과 오해', author: '조영호', publisher: '우아한'},
        {id: '2', title: 'JPA 프로그래밍', author: '김영한', publisher: '우아한형'},
        {id: '8', title: 'RxJava 프로그래밍', author: '유동환', publisher: '우아'},
        {id: '12', title: '양파껍질 학습법', author: '박재성', publisher: '우아한형제'},
        {id: '14', title: '자바 8 인 액션', author: '마리오 푸스코', publisher: '우아한형제들'},
        {id: '17', title: '배민다움', author: '김봉진', publisher: '배민'},
        {id: '19', title: '스타트업이 일하는 방법', author: '김범준', publisher: '배달의 민족'},
        {id: '30', title: 'WoowaDH 아시아 법인', author: '그러게 말이다', publisher: '요기요'},
        {id: '45', title: '개발왕 루피 그는 누구인가', author: '권민철', publisher: '딜리버리 히어로 ㅋㅋㅋㅋㅋㅋ'},
    ];

    return dummyBookList;
};

export const findById = (id: number) => {
    const image = 'https://bookthumb-phinf.pstatic.net/cover/091/459/09145968.jpg?type=m1&udate=20171011';
    const title = '객체지향의 사실과 오해 (역할, 책임, 협력 관점에서 본 객체지향)';
    const author = '조영호';
    const publisher = '위키북스';
    const description = '객체지향에 대한 선입견을 버려라!『객체지향의 사실과 오해』는 객체지향이란 무엇인가라는 원론적면서도 다소 위험한 질문에 답하기 위해 쓰여진 책이다. 안타깝게도 많은 사람들이 객체지향의 본질을 오해하고 있다. 가장 널리 퍼져있는 오해는 클래스가 객체지향 프로그래밍의 중심이라는 것이다.... ';
    const isbn = '8998139766 9788998139766';
    return new BookInfoDto(id, image, title, author, publisher, description, isbn);
};