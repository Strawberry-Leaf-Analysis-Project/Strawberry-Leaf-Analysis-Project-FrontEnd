import React, { useEffect, useState } from 'react'
import { PLANTS_GROUP_API } from '../api/ApiStorage'
import { TextInput } from '../login/styled_login'
import { Diary } from '../type/Interface'
import {
    ButtonDiv,
    CancelButton,
    CenterDiv,
    ConfirmButton,
    ContnetText,
    ModalDiv,
    SortationOption,
    SortationSelect,
    TextInputDiv,
    TitleText,
    WarningText
} from './styled_modal'

function ModalModify({ isModal, setIsModal, isModify, setIsModify, isName, groupId }: any) {
    const [inputs, setInputs] = useState<Diary>({
        name: isName,
        date: "",
        status: "0",
        id: ''
    })

    useEffect(() => {
        if (isModal) {
            setIsModify(false)
        }
    }, [isModal])
    useEffect(() => {
        setInputs({
            name: isName,
            date: "",
            status: "0",
            id: ''
        })
    }, [isName])
    const [warning, setWarning] = useState<boolean>(false)
    const onConfirm = () => {
        if (inputs.name === '') {
            setWarning(true)
            return
        }
        setWarning(false)
        PLANTS_GROUP_API.PATCH_GROUP_NAME(groupId, inputs.name)
        PLANTS_GROUP_API.PATCH_GROUP_STATUS(groupId, inputs.status)
    }
    const onCancel = () => {
        setIsModify(false)
        setInputs({
            name: isName,
            date: "",
            status: "0",
            id: ''
        })
    }
    const onValueChange = (e: any) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        console.log(inputs)
    }
    const { name, date, status } = inputs
    return (
        <CenterDiv>
            <ModalDiv isModal={isModify}>
                <TitleText>식물 생장 일기 수정</TitleText>
                <TextInputDiv>
                    <ContnetText>식물명: </ContnetText>
                    <TextInput name='name' width={130} value={name} height={15} onChange={onValueChange} required></TextInput>
                </TextInputDiv>
                <TextInputDiv>
                    <ContnetText>구분: </ContnetText>
                    <SortationSelect name='status' onChange={onValueChange}>
                        <SortationOption value='0'>성장중</SortationOption>
                        <SortationOption value='1'>성장완료</SortationOption>
                    </SortationSelect>
                </TextInputDiv>
                {warning ? (<WarningText>1 글자 이상 입력해주세요</WarningText>) : (null)}
                <ButtonDiv>
                    <ConfirmButton to='' onClick={onConfirm} isModal={isModify}>수정</ConfirmButton>
                    <CancelButton onClick={onCancel} isModal={isModify}>취소</CancelButton>
                </ButtonDiv>
            </ModalDiv>
        </CenterDiv>
    )
}

export default ModalModify