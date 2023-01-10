import React from 'react'
import { useQuery } from 'react-query'
import { GET_USER_BOARD, USER_DATA } from '../api/ApiStorage'
import {
    DiaryBoardDiv,
    DiaryBoardListDiv,
    DiaryDetailBoardText,
    DiaryDetailDiv,
    DiaryDetailIdText,
    DiaryDetailNameText,
    DiaryDetailIdNameDiv
} from './styled_diary'
import { CardForm } from './BoardCard'
import { userData } from '../data/userData'
import { LodingImage } from './styled_board'
import loding from '../assets/image/loding.gif'
import { useMediaQuery } from 'react-responsive'
function DiaryBoard() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    const my_board = useQuery('my_board', async () => {
        return await GET_USER_BOARD()
    })
    const user = useQuery('user_data', async () => {
        return await USER_DATA(userData.key)
    })
    const UserView = () => {
        if (user.isLoading || my_board.isLoading) {
            return <LodingImage src={loding} />
        }
        else {
            return (
                <DiaryDetailDiv>
                    <DiaryDetailIdNameDiv>
                        <DiaryDetailNameText>이름: {user.data.name}</DiaryDetailNameText>
                        <DiaryDetailIdText>아이디: {user.data.id}</DiaryDetailIdText>
                    </DiaryDetailIdNameDiv>
                    <DiaryDetailBoardText>게시물 수: {my_board.data.length}</DiaryDetailBoardText>
                </DiaryDetailDiv>
            )
        }
    }
    return (
        <DiaryBoardDiv>
            {UserView()}
            <DiaryBoardListDiv isMedia={isDesktopOrMobile}>
                {CardForm(my_board)}
            </DiaryBoardListDiv>
        </DiaryBoardDiv>
    )
}

export default DiaryBoard