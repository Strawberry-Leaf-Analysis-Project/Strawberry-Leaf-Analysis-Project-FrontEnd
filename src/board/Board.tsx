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
    SortText
} from './styled_board';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import leaves from '../assets/image/leaves.jpg';
// import Add from '../assets/icons/Add.svg'
import Edit from '../assets/icons/Edit.svg'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { SORT_TIME } from '../api/ApiStorage'
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
function Board() {
    const [sortTimeBoard, setSortTimeBoard] = useState<any[]>([])
    const [isModal,setIsModal] = useState<boolean>(false);
    const onModal =()=>{
        if(isModal){
            setIsModal(false)
        }
        else{
            setIsModal(true)
        }
    }
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
    const CardForm = () => {
        return (
            <>
                {sortTimeBoard.slice(0).reverse().map((element) => (
                    <CardDiv key={element.id}>
                        <Card sx={{ maxWidth: 250, borderRadius: 2, minWidth: 250, boxShadow: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={leaves}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography className='title' gutterBottom variant="h6" component="div" fontFamily="NanumSquareNeo-R" fontSize="17px">
                                        {element.title}
                                    </Typography>
                                    <Typography className='contents' variant="body2" color="text.secondary" fontFamily="NanumSquareNeo-R" fontSize="11px">
                                        {element.contents}
                                    </Typography>
                                    <Typography className='name' variant="body1" fontFamily="NanumSquareNeo-R" fontSize="12px" marginTop='10px'>
                                        작성자: {element.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </CardDiv>
                ))}
            </>
        )
    }
    return (
        <>
            <ModalBoard isModal={isModal}/>
            <BoardDiv>
                <SortText>최신순</SortText>
                <ArrowDiv>
                    <IconLeftDiv onClick={()=> moveTimeLeft(scrollTimeRef)}>
                        <ArrowCircleLeftIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconLeftDiv>
                    <CardListDiv ref={scrollTimeRef} >
                        {CardForm()}
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
                        {CardForm()}
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
                    <CardListDiv ref={scrollLikeRef} >
                        {CardForm()}
                    </CardListDiv>
                    <IconRightDiv onClick={()=> moveLikeRight(scrollLikeRef)}>
                        <ArrowCircleRightIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconRightDiv>
                </ArrowDiv>
            </BoardDiv>
            <EditIconDiv onClick={onModal}>
                <EditIcon src={Edit} />
            </EditIconDiv>
        </>
    )
}

export default Board