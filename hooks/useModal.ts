import { useState } from "react"
import { useRecoilState } from "recoil"
import { IModal, modalState } from "../model/ModalModel/atoms"

const useModal = () => {
    const [modalList, setModalList] = useRecoilState(modalState)
    const addModal = ({ key, props }: IModal) => {
        console.log({ key, props })
        console.log(modalList)
        const newModalList = [...modalList];    
        newModalList.push({ key, props });
        setModalList(newModalList)
    }
    const removeModal = () => {
        const newModalList = [...modalList];
        newModalList.pop();
        setModalList(newModalList)
    }
    return {
        addModal, removeModal
    }
}

export default useModal