import { selector, selectorFamily } from "recoil";
import { requestCustomAxios } from "../../lib/apis/customAxios";



export const getSuccessState = selectorFamily({
    key: "getSuccess",
    get: (code) => async ({ get }) => {
        const res = await requestCustomAxios({ method: "GET", url: '/sns/github/callback', params: { code } })
            .then(res => {
                localStorage.setItem('grank_token', res.data.token)
            })
        const token = localStorage.getItem('grank_token')
        return token ? true : false;
    }   
})

