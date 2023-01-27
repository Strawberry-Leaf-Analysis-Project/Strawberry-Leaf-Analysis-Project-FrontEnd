import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { BOARD_API, MEMBER_API, PLANTS_GROUP_API } from '../api/ApiStorage'
import {
    DiaryBoardDiv,
    DiaryBoardListDiv,
    DiaryDetailBoardText,
    DiaryDetailDiv,
    DiaryDetailIdText,
    DiaryDetailNameText,
    DiaryDetailIdNameDiv,
    DiaryContentDiv,
    GroupText,
    DiaryDiv
} from './styled_diary'
import { CardForm } from './BoardCard'
import { userData } from '../data/userData'
import { EditIcon, EditIconDiv, LodingImage } from './styled_board'
import loding from '../assets/image/loding.gif'
import { useMediaQuery } from 'react-responsive'
import { onModal } from './onModal'
import Edit from '../assets/icons/Edit.svg'
import ModalDiary from '../modal/ModalDiary'
function DiaryBoard() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    // const my_board = useQuery('my_board', async () => {
    //     return await BOARD_API.GET_USER_BOARD()
    // })
    // const user = useQuery('user_data', async () => {
    //     return await MEMBER_API.USER_DATA(userData.key)
    // })
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
    // const UserView = () => {
    //     if (user.isLoading || my_board.isLoading) {
    //         return <LodingImage src={loding} />
    //     }
    //     else {
    //         return (
    //             <DiaryDetailDiv>
    //                 <DiaryDetailIdNameDiv>
    //                     <DiaryDetailNameText>이름: {user.data.name}</DiaryDetailNameText>
    //                     <DiaryDetailIdText>아이디: {user.data.id}</DiaryDetailIdText>
    //                 </DiaryDetailIdNameDiv>
    //                 <DiaryDetailBoardText>일지 수: {my_board.data.length}</DiaryDetailBoardText>
    //             </DiaryDetailDiv>
    //         )
    //     }
    // }
    {/* <DiaryBoardDiv>
                {UserView()}
                <DiaryBoardListDiv isMedia={isDesktopOrMobile}>
                    {CardForm(my_board)}
                </DiaryBoardListDiv>
            </DiaryBoardDiv> */}
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