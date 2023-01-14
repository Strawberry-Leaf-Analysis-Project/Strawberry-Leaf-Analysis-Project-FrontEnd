import React from 'react'
import { useLocation } from 'react-router-dom'
import { DiaryBoardListDiv } from '../styled_diary';
import { CardForm } from '../BoardCard'
import { useMediaQuery } from 'react-responsive';
import { useQuery } from 'react-query';
import { SEARCH_DATA } from '../../api/ApiStorage';
function SearchBoard() {
    const { state } = useLocation()
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    console.log(state.text)
    const search_board = useQuery('search_board', async () => {
        return await SEARCH_DATA(state.text)
        
    })
    return (
        <DiaryBoardListDiv isMedia={isDesktopOrMobile}>
            {CardForm(search_board)}
        </DiaryBoardListDiv>
    )
}

export default SearchBoard