import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import {
    BoardDiv,
    CardListDiv,
    CardDiv,
    ArrowDiv,
    IconLeftDiv,
    IconRightDiv,
    EditIcon,
    EditIconDiv,
    SortText,
    LodingImage
} from './styled_board';
import Edit from '../assets/icons/Edit.svg'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { SORT_TIME,GET_USER_BOARD,GET_ALL_BOARD,GET_LIKE_BOARD,GET_VIEWS_BOARD,GET_DATE_BOARD } from '../api/ApiStorage'
import {
    moveLikeLeft,
    moveLookupLeft,
    moveTimeLeft
} from './scroll/ScrollLeft'
import {
    moveLikeRight,
    moveLookupRight,
    moveTimeRight
} from './scroll/ScrollRight'
import ModalBoard from '../modal/ModalBoard';
import { userData } from '../data/userData';
import { useQuery } from 'react-query';
import {CardForm} from './BoardCard'
function Board() {
    const [sortTimeBoard, setSortTimeBoard] = useState<any[]>([])
    const [isModal,setIsModal] = useState<boolean>(false);
    const like_board = useQuery('like_board', async() => {
        return await GET_LIKE_BOARD()
    })
    const view_board = useQuery('view_board', async() => {
        return await GET_VIEWS_BOARD()
    })
    const date_board = useQuery('date_board', async() => {
        return await GET_DATE_BOARD()
    })
    // const { isLoading, data } = useQuery('all_board', async() => {
    //     return await GET_ALL_BOARD()
    // })
    const onModal =()=>{
        if(isModal){
            setIsModal(false)
        }
        else{
            setIsModal(true)
        }
    }
    // useEffect(()=>{
    //     GET_USER_BOARD()
    //     GET_ALL_BOARD()
    // })
    useEffect(() => {
        const getTimeBoard = async() =>{
            await axios
            .get<any[]>(SORT_TIME)
            .then((response) => {

                setSortTimeBoard(response.data)
            })
        }
        getTimeBoard()
    }, [])
    const scrollTimeRef = useRef<HTMLInputElement>(null)
    const scrollLookupRef = useRef<HTMLInputElement>(null)
    const scrollLikeRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <ModalBoard isModal={isModal} setIsModal={setIsModal}/>
            <BoardDiv>
                <SortText>최신순</SortText>
                <ArrowDiv>
                    <IconLeftDiv onClick={()=> moveTimeLeft(scrollTimeRef)}>
                        <ArrowCircleLeftIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconLeftDiv>
                    <CardListDiv ref={scrollTimeRef} >
                        {CardForm(like_board)}
                    </CardListDiv>
                    <IconRightDiv onClick={()=> moveTimeRight(scrollTimeRef)}>
                        <ArrowCircleRightIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconRightDiv>
                </ArrowDiv>
                <SortText>조회순</SortText>
                <ArrowDiv>
                    <IconLeftDiv onClick={()=> moveLookupLeft(scrollLookupRef)}>
                        <ArrowCircleLeftIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconLeftDiv>
                    <CardListDiv ref={scrollLookupRef} >
                        {CardForm(view_board)}
                    </CardListDiv>
                    <IconRightDiv onClick={()=> moveLookupRight(scrollLookupRef)}>
                        <ArrowCircleRightIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconRightDiv>
                </ArrowDiv>
                <SortText>좋아요순</SortText>
                <ArrowDiv>
                    <IconLeftDiv onClick={()=>moveLikeLeft(scrollLikeRef)}>
                        <ArrowCircleLeftIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconLeftDiv>
                    <CardListDiv ref={scrollLikeRef}>
                        {CardForm(date_board)}
                    </CardListDiv>
                    <IconRightDiv onClick={()=> moveLikeRight(scrollLikeRef)}>
                        <ArrowCircleRightIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconRightDiv>
                </ArrowDiv>
            </BoardDiv>
            {userData !== null ? 
            (
            <EditIconDiv onClick={onModal}>
                <EditIcon src={Edit} />
            </EditIconDiv>
            ) : (null)}

        </>
    )
}

export default Board