import React, { useEffect, useState } from 'react'
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
    TitleText
} from './styled_modal'

function ModalModify({ isModal, setIsModal, isModify, setIsModify }: any) {
    const [inputs, setInputs] = useState<Diary>({
        name: "",
        date: "",
        status: "0",
        id: ""
    })
    useEffect(() => {
        if (isModal) {
            setIsModify(false)
        }
    }, [isModal])
    const onConfirm = () => {
        // PLANTS_GROUP_API.POST_GROUP(inputs)
        // setIsModal(true)
    }
    const onCancel = () => {
        setIsModify(false)
    }
    const onValueChange = (e: any) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        console.log(inputs)
    }
    const { name, date, status, id } = inputs
    useEffect(() => {
        const GET_DATA: any = window.localStorage.getItem('data')
        setInputs({
            ...inputs,
            ['id']: JSON.parse(GET_DATA)['id']
        })
    }, [])
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
                <ButtonDiv>
                    <ConfirmButton to='' onClick={onConfirm} isModal={isModify}>수정</ConfirmButton>
                    <CancelButton onClick={onCancel} isModal={isModify}>취소</CancelButton>
                </ButtonDiv>
            </ModalDiv>
        </CenterDiv>
    )
}

export default ModalModify