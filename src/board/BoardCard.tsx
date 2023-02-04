import { CardDiv, LodingImage } from "./styled_board"
import loding from '../assets/image/loding.gif'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
export const CardForm = (data: any) => {
    const navigate = useNavigate();
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    const is_width = isDesktopOrMobile ? 160 : 220
    const is_height = isDesktopOrMobile ? 90 : 140
    const is_title = isDesktopOrMobile ? '12px' : '17px'
    const is_contents = isDesktopOrMobile ? '7px' : '11px'
    const is_user = isDesktopOrMobile ? '8px' : '12px'
    const goViewPage = (element: any) => {
        navigate(`/growth_board/${element.id}/${element.title}`, {
            state: {
                id: element.id
            }
        })
    }
    console.log(data.data)
    if (data.data === undefined) {
        return null
    }
    if (data.isLoading) {
        return <LodingImage src={loding} />
    }
    else {
        return (
            <>
                {data.data.map((element: any) => element.title !== null || element.explain !== null ? (
                    <CardDiv key={element.id} onClick={() => goViewPage(element)}>
                        <Card sx={{ maxWidth: is_width, borderRadius: 2, minWidth: is_width, boxShadow: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height={is_height}
                                    image={element.input_image}
                                    loading='lazy'
                                />
                                <CardContent>
                                    <Typography className='title' gutterBottom variant="h6" component="div" fontFamily="NanumSquareNeo-R" fontSize={is_title}>
                                        {element.title}
                                    </Typography>
                                    <Typography className='contents' variant="body2" color="text.secondary" fontFamily="NanumSquareNeo-R" fontSize={is_contents}>
                                        {element.explain}
                                    </Typography>
                                    <Typography className='name' variant="body1" fontFamily="NanumSquareNeo-R" fontSize={is_user} marginTop='5px'>
                                        작성자: {element.user}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </CardDiv>
                ) : (null)

                )}
            </>
        )
    }

}