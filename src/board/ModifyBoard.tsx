import React, { useState } from 'react'
import {
    CreateDiv,
    ExplainInput,
    LodingImg,
    LodingImgDiv,
    LodingText,
    ResultButton,
    TitleInput
} from './styled_create_board'

import Loding from '../assets/image/loding.gif'
import { Modify } from '../type/Interface'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom';
import { BOARD_API } from '../api/ApiStorage'
function ModifyBoard() {
    const [loding, setLoding] = useState<boolean>(false)
    const location = useLocation()
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    const onSubmitResult = async (e: any) => {
        e.preventDefault();
        BOARD_API.MODIFY_BOARD(location.state.id, inputs)
        setLoding(true)
        window.location.replace("/")
    }
    const [inputs, setInputs] = useState<Modify>({
        title: location.state.isTitle,
        explain: location.state.isExpain,
    })
    const { title, explain } = inputs
    const onChangeText = (e: any) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        console.log(value)
    }
    return (
        <CreateDiv method='post' onSubmit={onSubmitResult}>
            {loding ? (
                <LodingImgDiv>
                    <LodingImg src={Loding}></LodingImg>
                    <LodingText>게시글 수정중 ...</LodingText>
                </LodingImgDiv>) : (null)}
            <TitleInput type='text' name='title' placeholder='제목을 입력해 주세요' isMedia={isDesktopOrMobile} value={title} onChange={onChangeText} required></TitleInput>
            <ExplainInput name='explain' placeholder='내용을 입력해주세요' isMedia={isDesktopOrMobile} value={explain} onChange={onChangeText} required></ExplainInput>
            <ResultButton type='submit' value='게시글 작성'></ResultButton>
        </CreateDiv>
    )
}

export default ModifyBoard