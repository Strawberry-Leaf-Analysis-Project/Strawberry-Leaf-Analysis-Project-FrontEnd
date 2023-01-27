import React, { useEffect, useState } from 'react'
import {
    CenterDiv,
    ModalDiv,
    TitleText,
    SortationSelect,
    SortationOption,
    ContnetText,
    ButtonDiv,
    CancelButton,
    ConfirmButton,
    TextInputDiv,
} from './styled_modal'
import { Diary } from '../type/Interface'
import { TextInput } from '../login/styled_login'
import { PLANTS_GROUP_API } from '../api/ApiStorage'
function ModalDiary({ isModal, setIsModal }: any) {
    const [inputs,setInputs] = useState<Diary>({
        name:"",
        date: "",
        status:"0",
        id:""
    })
    const onConfirm = () => {
        PLANTS_GROUP_API.POST_GROUP(inputs)
        setIsModal(true)
    }
    const onCancel = () => {
        setIsModal(false)
    }
    const onValueChange =(e:any)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        console.log(inputs)
    }
    const {name,date,status,id} = inputs
    useEffect(()=>{
        const GET_DATA :any= window.localStorage.getItem('data')
        setInputs({
            ...inputs,
            ['id']:JSON.parse(GET_DATA)['id']
        })
    },[])
    return (
        <CenterDiv>
            <ModalDiv isModal={isModal}>
                <TitleText>식물 생장 일기 쓰기</TitleText>
                <TextInputDiv>
                    <ContnetText>식물명: </ContnetText>
                    <TextInput name='name' width={130} value={name} height={15} onChange={onValueChange} required></TextInput>
                </TextInputDiv>
                <TextInputDiv>
                    <ContnetText>식재일: </ContnetText>
                    <TextInput name='date' type='date' value={date} width={130} height={15} onChange={onValueChange} required></TextInput>
                </TextInputDiv>
                <TextInputDiv>
                    <ContnetText>구분: </ContnetText>
                    <SortationSelect name='status' onChange={onValueChange}>
                        <SortationOption value='0'>성장중</SortationOption>
                        <SortationOption value='1'>성장완료</SortationOption>
                    </SortationSelect>
                </TextInputDiv>
                <ButtonDiv>
                    <ConfirmButton to='./' onClick={onConfirm} isModal={isModal}>작성</ConfirmButton>
                    <CancelButton onClick={onCancel} isModal={isModal}>취소</CancelButton>
                </ButtonDiv>
            </ModalDiv>
        </CenterDiv>
    )
}

export default ModalDiary