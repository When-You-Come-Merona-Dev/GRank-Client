import { atom, atomFamily, selector } from "recoil";
export const loginState = atom({
    key: "isLogged",
    default: false
})
