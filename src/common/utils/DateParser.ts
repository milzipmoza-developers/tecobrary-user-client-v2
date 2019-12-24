export const formatDate = (date: number, yearMode: boolean, dayMode?: boolean) => {
    const today = new Date(date);
    const year = (yearMode) ? `${today.getFullYear()}년 ` : '';
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const day = (dayMode) ? `${getDayName(today.getDay())}요일` : '';
    return `${year}${todayMonth}월 ${todayDate}일 ${day}`
};

const getDayName = (day: number) => {
    const array = ['일', '월', '화', '수', '목', '금', '토'];
    return array[day % 6];
};
