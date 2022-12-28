import React from 'react'
import { ModalDiv,CentetDiv} from './styled_modal'
function ModalBoard({isModal}:any) {
    console.log(isModal)
    return (
        <CentetDiv>
            <ModalDiv isModal={isModal}>ModalBoard</ModalDiv>
        </CentetDiv>
    )
}

export default ModalBoard