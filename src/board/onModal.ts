import { useState } from "react";

export const onModal = (isModal:boolean,setIsModal:any) => {
    if (isModal) {
        setIsModal(false)
    }
    else {
        setIsModal(true)
    }
}