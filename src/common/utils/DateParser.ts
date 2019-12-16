export const formatDate = (date: number, yearMode: boolean) => {
    const today = new Date(date);
    const year = (yearMode) ? `${today.getFullYear()}년 ` : '';
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const todayDay = getDayName(today.getDay());
    return `${year}${todayMonth}월 ${todayDate}일 ${todayDay}요일`
};

const getDayName = (day: number) => {
    const array = ['일', '월', '화', '수', '목', '금', '토'];
    return array[day % 6];
};
