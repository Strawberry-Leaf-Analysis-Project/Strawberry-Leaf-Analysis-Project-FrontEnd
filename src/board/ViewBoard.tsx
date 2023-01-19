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
} from './styled_viewBoard'
import { GET_BOARD } from '../api/ApiStorage';
import { useQuery } from 'react-query';
import loding from '/Users/cocopang/Desktop/Strawberry-Leaf-Analysis-Project-FrontEnd/src/assets/image/loding.gif'
import { EditIcon, EditIconDiv } from './styled_board';
import { onModal } from './onModal'
import { userData } from '../data/userData';
import Settings from '../assets/icons/Settings.svg'
import ModalSetting from '../modal/ModalSetting';
function ViewBoard() {
  const { state } = useLocation()
  const [isModal, setIsModal] = useState<boolean>(false)
  const get_board = useQuery('get_board', async () => {
    return await GET_BOARD(state.key)
  })
  const idCheck=()=>{
    if (userData !==null && userData.id === get_board.data.user){
      return true
    }
    else{
      return false
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
          </TextDiv>
          <ExplainText>{get_board.data.explain}</ExplainText>
          <ImageDiv>
            <BeforeDiv>
              <TextBefore>Before</TextBefore>
              <ImageBefore src={get_board.data.image} />
            </BeforeDiv>
            <AfterDiv>
              <TextAfter>After</TextAfter>
              <ImageAfter src={get_board.data.image} />
            </AfterDiv>
          </ImageDiv>
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