import React from 'react'
import {
    ModalDiv,
    CentetDiv,
    TitleText,
    ConfirmButton,
    CancelButton,
    ButtonDiv
} from './styled_modal'
function ModalBoard({ isModal,setIsModal }: any) {
    const onConfirm = ()=>{
        setIsModal(true)
    }
    const onCancel = ()=>{
        setIsModal(false)
    }
    return (
        <CentetDiv>
            <ModalDiv isModal={isModal}>
                <TitleText>게시글을 작성 하시겠습니까?</TitleText>
                <ButtonDiv>
                    <ConfirmButton to='./create_board' onClick={onConfirm} isModal={isModal}>확인</ConfirmButton>
                    <CancelButton onClick={onCancel} isModal={isModal}>취소</CancelButton>
                </ButtonDiv>
            </ModalDiv>
        </CentetDiv>
    )
}

export default ModalBoard