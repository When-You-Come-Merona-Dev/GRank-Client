import { atom } from "recoil";

export interface IModal {
    key: string;
    props?: any;
}

export const modalState = atom({
    key: "modalList",
    default : []
})