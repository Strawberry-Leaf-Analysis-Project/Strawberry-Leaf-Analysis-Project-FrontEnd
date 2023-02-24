import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom'
import { BOARD_API } from '../api/ApiStorage';
import { CardForm } from './BoardCard';
import { SearchDiv } from './searchBoard/search_styled';
import { DiaryBoardListDiv } from './styled_diary';

function GroupBoard() {
    const { state } = useLocation()
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    const group_board = useQuery('group_board', async () => {
        return await BOARD_API.GET_BOARD_GROUP_LIST(state.name)
    })

    return (
        <SearchDiv>
            <DiaryBoardListDiv isMedia={isDesktopOrMobile}>
                {CardForm(group_board)}
            </DiaryBoardListDiv>
        </SearchDiv>
    )
}

export default GroupBoard