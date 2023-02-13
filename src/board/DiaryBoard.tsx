import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { PLANTS_GROUP_API } from '../api/ApiStorage'
import {
    DiaryBoardDiv,
    GroupText,
    DiaryDiv
} from './styled_diary'
import { EditIcon, EditIconDiv, LodingImage } from './styled_board'
import loding from '../assets/image/loding.gif'
import { onModal } from './onModal'
import Edit from '../assets/icons/Edit.svg'
import ModalDiary from '../modal/ModalDiary'
function DiaryBoard() {
    const [isModal, setIsModal] = useState<boolean>(false)
    const [id, setId] = useState('')
    const group = useQuery('group', async () => {
        return await PLANTS_GROUP_API.GET_GROUP()
    })
    useEffect(() => {
        const GET_DATA: any = window.localStorage.getItem('data')
        setId(JSON.parse(GET_DATA)['id'])
    }, [])
    const groupView = () => {
        if (group.isLoading) {
            return (
                <LodingImage src={loding} />
            )
        }
        else {
            return (
                <>
                    {group.data.map((element: any) => {
                        if (element.user === id) {
                            return (
                                <DiaryBoardDiv>
                                    <GroupText>{element.name}</GroupText>

                                    <GroupText>{element.date.substring(0, 10).replace(/-/g, ' . ')}</GroupText>

                                    <GroupText>{element.status == '0' ? ('성장중') : ('성장완료')}</GroupText>
                                </DiaryBoardDiv>
                            )
                        }

                    })}
                </>
            )
        }
    }
    return (
        <DiaryDiv>
            <ModalDiary isModal={isModal} setIsModal={setIsModal} />
            <DiaryBoardDiv>
                <GroupText>식물명</GroupText>
                <GroupText>식재일</GroupText>
                <GroupText>상태</GroupText>
            </DiaryBoardDiv>
            {groupView()}
            <EditIconDiv onClick={() => onModal(isModal, setIsModal)}>
                <EditIcon src={Edit} />
            </EditIconDiv>
        </DiaryDiv>
    )
}

export default DiaryBoard