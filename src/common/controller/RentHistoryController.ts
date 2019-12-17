import {RentHistoryProps} from "../../organisms/renthistory/RentHistoryProps";

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
    ];

    const offset = getOffset(page, num);

    return responseData.splice(offset, offset + num);
};