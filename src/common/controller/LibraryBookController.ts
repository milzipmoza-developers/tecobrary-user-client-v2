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