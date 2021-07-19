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

export const getUserInfo = selector({
    key: "getUserInfo",
    get: async ({ get }) => {
        const res = await requestCustomAxios({
            method: "GET", url: "/github-users/me", header: {
                'Authorization' : `Bearer ${localStorage.getItem('grank_token')}`,
        } })
        return res.data;
    }
})