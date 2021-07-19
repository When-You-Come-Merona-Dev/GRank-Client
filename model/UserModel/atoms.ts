import { atom, atomFamily, selector } from "recoil";
import SnsAPI from "../../lib/apis/SNS/SnsAPI";

export const loginState = atom({
    key: "isLogged",
    default: false
})

export const getClientURL = atom({
    key: "getClientURL",
    default: selector({
        key: "getClientURL",
        get: async ({ get }) => {
            const res = await SnsAPI.getUserClientURL()
            return res.data.login_url;
        }
    })
})