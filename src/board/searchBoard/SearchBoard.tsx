import React from 'react'
import { useLocation } from 'react-router-dom'
import { DiaryBoardListDiv } from '../styled_diary';
import { CardForm } from '../BoardCard'
import { useMediaQuery } from 'react-responsive';
import { useQuery } from 'react-query';
import { SEARCH_DATA } from '../../api/ApiStorage';
import { SearchDiv } from './search_styled';
function SearchBoard() {
    const { state } = useLocation()
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    console.log(state.text)
    const search_board = useQuery('search_board', async () => {
        return await SEARCH_DATA(state.text)

    })
    return (
        <SearchDiv>
            <DiaryBoardListDiv isMedia={isDesktopOrMobile}>
                {CardForm(search_board)}
            </DiaryBoardListDiv>
        </SearchDiv>
    )
}

export default SearchBoard