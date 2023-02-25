import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";
import {
  AfterDiv,
  BeforeDiv,
  DateIdTextDiv,
  DateText,
  ExplainText,
  IdText,
  ImageAfter,
  ImageBefore,
  ImageDiv,
  Loding,
  LodingDiv,
  TextAfter,
  TextBefore,
  TextDiv,
  TitleText,
  ViewBoardDiv,
  ViewsText,
  LikesText,
  LikeButtonDiv,
  LikeButton,
  LikeImg,
  SegmentDiv,
  SegmentImg,
  SegmentImgDiv,
  SegmentText
} from './styled_viewBoard'
import { BOARD_API, PLANTS_DETAIL_API } from '../api/ApiStorage';
import { useQuery } from 'react-query';
import loding from '../assets/image/loding.gif'
import { EditIcon, EditIconDiv } from './styled_board';
import { onModal } from './onModal'
import { userData } from '../data/userData';
import Settings from '../assets/icons/Settings.svg'
import ModalSetting from '../modal/ModalSetting';
import Like_0 from '../assets/icons/Like_0.svg'
import Like_1 from '../assets/icons/Like_1.svg'
function ViewBoard() {
  const { state } = useLocation()
  const [isModal, setIsModal] = useState<boolean>(false)
  const [togle, setTogle] = useState<number>(0)
  const get_board = useQuery('get_board', async () => {
    return await BOARD_API.GET_BOARD(state.id)
  })
  const get_board_like = useQuery('get_board_like', async () => {
    return await BOARD_API.GET_BOARD_LIKE(state.id)
  })
  const get_disease = useQuery('get_disease', async () => {
    return await PLANTS_DETAIL_API.GET_DISEASE(state.id)
  })
  const idCheck = () => {
    if (userData !== null && userData.id === get_board.data.user) {
      return true
    }
    else {
      return false
    }
  }
  const onLike = () => {
    if (get_board_like.data === 1 && togle === 0) {
      BOARD_API.PUSH_LIKE(get_board.data.id, '1')
      setTogle(-1)
    }
    if (get_board_like.data === 1 && togle === -1) {
      BOARD_API.PUSH_LIKE(get_board.data.id, '0')
      setTogle(0)
    }
    if (get_board_like.data === 0 && togle === 0) {
      BOARD_API.PUSH_LIKE(get_board.data.id, '0')
      setTogle(1)
    }
    if (get_board_like.data === 0 && togle === 1) {
      BOARD_API.PUSH_LIKE(get_board.data.id, '1')
      setTogle(0)
    }
  }
  if ((get_board.isLoading) || (get_board_like.isLoading) || (get_disease.isLoading)) {
    return (
      <LodingDiv>
        <Loding src={loding}></Loding>
      </LodingDiv>
    )
  }
  else {
    return (
      <>
        <ModalSetting isModal={isModal} setIsModal={setIsModal} isTitle={get_board.data.title} isExpain={get_board.data.explain} id={state.id} />
        <ViewBoardDiv>
          <TextDiv>
            <TitleText>{get_board.data.title}</TitleText>
            <DateIdTextDiv>
              <IdText>{get_board.data.user}</IdText>
              <DateText>{get_board.data.date.substring(0, 10).replace(/-/g, ' . ')}</DateText>
            </DateIdTextDiv>
            <ViewsText>조회수: {get_board.data.views}</ViewsText>
          </TextDiv>
          <ExplainText>{get_board.data.explain.split('\n').map((line: string) => {
            { return <>{line}<br /></> }
          })}</ExplainText>
          <ImageDiv>
            <BeforeDiv>
              <TextBefore>Before</TextBefore>
              <ImageBefore src={get_board.data.input_image} />
            </BeforeDiv>
            <AfterDiv>
              <TextAfter>After</TextAfter>
              <ImageAfter src={get_board.data.output_image} />
            </AfterDiv>
          </ImageDiv>
          <SegmentDiv>
            {get_disease.data.length === 0 ? (<SegmentText>병충해 확인결과 정상입니다.</SegmentText>) : (
              <>
                <SegmentText>병충해 확인결과 비정상입니다.</SegmentText>
                <SegmentImgDiv>
                  {get_disease.data.map((e: any) => {
                    return <SegmentImg src={e.leaf_image} />
                  })}
                </SegmentImgDiv>
              </>
            )}

          </SegmentDiv>
          <LikeButtonDiv>
            <LikeButton onClick={onLike}>
              {get_board_like.data + togle ? (<LikeImg src={Like_1} />) : (<LikeImg src={Like_0} />)}
            </LikeButton>
            <LikesText>{get_board.data.likes + togle}</LikesText>
          </LikeButtonDiv>
        </ViewBoardDiv>
        {idCheck() ?
          (
            <EditIconDiv onClick={() => onModal(isModal, setIsModal)}>
              <EditIcon src={Settings} />
            </EditIconDiv>
          ) : (null)}
      </>
    )
  }
}
export default ViewBoard