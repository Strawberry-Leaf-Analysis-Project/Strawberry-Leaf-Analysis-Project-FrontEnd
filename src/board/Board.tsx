import React from 'react'
import {
    BoardDiv,
    CardListDiv,
    CardDiv,
    ArrowDiv,
    IconLeftDiv,
    IconRightDiv,
} from './styled_board'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import leaves from '../assets/image/leaves.jpg';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Board() {
    const CardForm = () => {
        return (<Card sx={{ maxWidth: 260, borderRadius: 2, minWidth: 260 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image={leaves}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontFamily="NanumSquareNeo-R" fontSize="17px">
                        딸기잎
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily="NanumSquareNeo-R" fontSize="11px">
                        오늘의 딸기 관찰일지..
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>)
    }
    return (
        <>

            <BoardDiv>
                <ArrowDiv>
                    <IconLeftDiv>
                        <ArrowCircleLeftIcon fontSize='large' />
                    </IconLeftDiv>
                    <CardListDiv>
                        <CardDiv>
                            {CardForm()}
                        </CardDiv>
                        <CardDiv>
                            {CardForm()}
                        </CardDiv>
                        <CardDiv>
                            {CardForm()}
                        </CardDiv>
                        <CardDiv>
                            {CardForm()}
                        </CardDiv>
                        <CardDiv>
                            {CardForm()}
                        </CardDiv>
                        <CardDiv>
                            {CardForm()}
                        </CardDiv>
                        <CardDiv>
                            {CardForm()}
                        </CardDiv>
                    </CardListDiv>
                    <IconRightDiv>
                        <ArrowCircleRightIcon fontSize='large' />
                    </IconRightDiv>
                </ArrowDiv>

            </BoardDiv>

        </>
    )
}

export default Board