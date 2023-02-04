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
  LikeImg
} from './styled_viewBoard'
import { BOARD_API } from '../api/ApiStorage';
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
  const [togle, setTogle] = useState<boolean>(false)
  const get_board = useQuery('get_board', async () => {
    return await BOARD_API.GET_BOARD(state.id)
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
    if (togle) {
      BOARD_API.POST_LIKE_BOARD(get_board.data.id, get_board.data.likes - 1)
      setTogle(false)
    }
    else {
      BOARD_API.POST_LIKE_BOARD(get_board.data.id, get_board.data.likes + 1)
      setTogle(true)
    }
  }
  if (get_board.isLoading) {
    return (
      <LodingDiv>
        <Loding src={loding}></Loding>
      </LodingDiv>
    )
  }
  else {
    return (
      <>
        <ModalSetting isModal={isModal} setIsModal={setIsModal} />
        <ViewBoardDiv>
          <TextDiv>
            <TitleText>{get_board.data.title}</TitleText>
            <DateIdTextDiv>
              <IdText>{get_board.data.user}</IdText>
              <DateText>{get_board.data.date.substring(0, 10).replace(/-/g, ' . ')}</DateText>
            </DateIdTextDiv>
            <ViewsText>조회수: {get_board.data.views}</ViewsText>
            <LikesText>좋아요수: {get_board.data.likes}</LikesText>
          </TextDiv>
          <ExplainText>{get_board.data.explain}</ExplainText>
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
          <LikeButtonDiv>
            <LikeButton onClick={onLike}>
              {togle ? (<LikeImg src={Like_1} />) : (<LikeImg src={Like_0} />)}

            </LikeButton>

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