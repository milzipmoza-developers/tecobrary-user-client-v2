import {RentHistoryProps} from "../../organisms/renthistory/RentHistoryProps";
import {rentHistoryService} from "../service/RentHistoryService";

const ONE_MONTH = 24 * 3600 * 1000 * 30;

const getOffset = (page: number, num: number) => {
    let offset = 0;
    if (page > 1) {
        offset = num * (page - 1);
    }
    return offset;
};

export const findRentHistoriesByUserId = (userId: number, page: number, num: number) => {
    // TODO: findRentHistoriesByUserId from api server
    const responseData = [
        new RentHistoryProps(1, '객체 지향의 사실과 오해', '조영호', Date.now() - ONE_MONTH, Date.now(), true),
        new RentHistoryProps(2, '배민다움', '김봉진', Date.now() - 2 * ONE_MONTH, Date.now() - ONE_MONTH, false),
        new RentHistoryProps(3, '오브젝트', '조영호', Date.now() - 3 * ONE_MONTH, Date.now() - 2 * ONE_MONTH, true),
        new RentHistoryProps(6, '누가 내 치즈를 먹었나?', '김생쥐', Date.now() - 4 * ONE_MONTH, Date.now() - 3 * ONE_MONTH, false),
        new RentHistoryProps(12, '없는 것 같은데...', '이도원', Date.now() - 5 * ONE_MONTH, Date.now() - 4 * ONE_MONTH, true),
        new RentHistoryProps(13, '자바 성능 튜닝 이야기 (개발자가 반드시 알아야 할)', '조영호', Date.now() - ONE_MONTH, Date.now(), true),
        new RentHistoryProps(22, 'SQL 첫걸음 (하루 30분 36강으로 배우는 완전 초보의 SQL 따라잡기)\'', '김봉진', Date.now() - 2 * ONE_MONTH, Date.now() - ONE_MONTH, false),
        new RentHistoryProps(23, '열혈강의 자바 웹 개발 워크북 (MVC 아키텍처 마이바티스 스프링으로 만드는 실무형 개발자 로드맵)', '조영호', Date.now() - 3 * ONE_MONTH, Date.now() - 2 * ONE_MONTH, true),
        new RentHistoryProps(26, '토비의 스프링 3.1 Vol. 1 (스프링의 이해와 원리)', '김생쥐', Date.now() - 4 * ONE_MONTH, Date.now() - 3 * ONE_MONTH, false),
        new RentHistoryProps(29, '21세기를 위한 21가지 제언 (더 나은 오늘은 어떻게 가능한가)', '이도원', Date.now() - 5 * ONE_MONTH, Date.now() - 4 * ONE_MONTH, true),
        new RentHistoryProps(31, '칸반과 스크럼', '헨릭 크니버그|마티아스 스카린', Date.now() - ONE_MONTH, Date.now(), true),
        new RentHistoryProps(32, '함수형 사고 (객체지향 개발자에서 함수형 개발자로 거듭나기)', '김봉진', Date.now() - 2 * ONE_MONTH, Date.now() - ONE_MONTH, false),
        new RentHistoryProps(33, '자바 ORM 표준 JPA 프로그래밍 (에이콘 오픈 소스 프로그래밍 시리즈,스프링 데이터 예제 프로젝트로 배우는 전자정부 표준 데이터베이스 프레임워크)', '김영한', Date.now() - 3 * ONE_MONTH, Date.now() - 2 * ONE_MONTH, true),
        new RentHistoryProps(36, '누가 내 치즈를 먹었나?', '김생쥐', Date.now() - 4 * ONE_MONTH, Date.now() - 3 * ONE_MONTH, false),
        new RentHistoryProps(37, '없는 것 같은데...', '이도원', Date.now() - 5 * ONE_MONTH, Date.now() - 4 * ONE_MONTH, true),
    ];

    const offset = getOffset(page, num);

    return responseData.splice(offset, offset + num);
};

const findRentListByUserId = async (userId: number) => {
    const response = await rentHistoryService.getRentListByUserId(userId);
    return response.data;
};

const rentBook = async (userId: number, serial: number) => {
    const response = await rentHistoryService.rentBook(userId, serial);
    return response.data;
};

const returnBook = async (userId: number, serial: number) => {
    const response = await rentHistoryService.returnBook(userId, serial);
    return response.data;
};

export const rentHistoryController = {
    findRentListByUserId,
    rentBook,
    returnBook,
};