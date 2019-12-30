import base from "./Api";

const search = (keyword: string, page: number, num: number) => (
    base().get('/naverapi', {
        params: {
            keyword,
            number: num,
            page,
        }
    })
);

export const naverApiService = {
    search,
};