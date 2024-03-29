import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { PLANTS_GROUP_API } from '../api/ApiStorage'
import {
    DiaryBoardDiv,
    GroupText,
    DiaryDiv,
    ModifyDiv
} from './styled_diary'
import { EditIcon, EditIconDiv, LodingImage } from './styled_board'
import loding from '../assets/image/loding.gif'
import { onModal } from './onModal'
import Edit from '../assets/icons/Edit.svg'
import ModalDiary from '../modal/ModalDiary'
import ModalModify from './../modal/ModalModify';
import { useNavigate } from 'react-router-dom'
function DiaryBoard() {
    const [isModal, setIsModal] = useState<boolean>(false)
    const [isModify, setIsModify] = useState<boolean>(false)
    const [id, setId] = useState<string>('')
    const [isName, setIsName] = useState<string>('')
    const [groupId, setGroupId] = useState<string>('')
    const group = useQuery('group', async () => {
        return await PLANTS_GROUP_API.GET_GROUP()
    })
    const navigate = useNavigate()
    const goGroup = (user: number, name: string) => {
        navigate(`/my_growth_diary/${user}/${name}`, {
            state: {
                name: name,
                user: user,
            }
        })
    }
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
                    {group.data.sort((a: any, b: any) => {
                        return +new Date(b.date) - +new Date(a.date)
                    }).map((element: any) => {
                        if (element.user === id) {
                            return (
                                <DiaryBoardDiv>
                                    <GroupText onClick={() => { goGroup(element.user, element.name); }}>{element.name}</GroupText>

                                    <GroupText>{element.date.substring(0, 10).replace(/-/g, ' . ')}</GroupText>

                                    <GroupText>{element.status == '0' ? ('성장중') : ('성장완료')}</GroupText>

                                    <ModifyDiv onClick={() => { onModal(isModify, setIsModify); setIsName(element.name); setGroupId(element.id) }}>수정</ModifyDiv>
                                </DiaryBoardDiv>
                            )
                        }
                    })
                    }
                </>
            )
        }
    }
    return (
        <DiaryDiv>
            <ModalDiary isModal={isModal} setIsModal={setIsModal} isModify={isModify} setIsModify={setIsModify} />
            <ModalModify isModal={isModal} setIsModal={setIsModal} isModify={isModify} setIsModify={setIsModify} isName={isName} groupId={groupId} />
            <DiaryBoardDiv>
                <GroupText>식물명</GroupText>
                <GroupText>식재일</GroupText>
                <GroupText>상태</GroupText>
                <GroupText>설정</GroupText>
            </DiaryBoardDiv>
            {groupView()}
            <EditIconDiv onClick={() => { onModal(isModal, setIsModal) }}>
                <EditIcon src={Edit} />
            </EditIconDiv>
        </DiaryDiv>
    )
}

export default DiaryBoard