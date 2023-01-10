import React from 'react'
import { useLocation } from "react-router";
import {
  DateIdTextDiv,
  DateText,
  ExplainText,
  IdText,
  ImageAfter,
  ImageBefore,
  ImageDiv,
  TextDiv,
  TitleText,
  ViewBoardDiv,
} from './styled_viewBoard'
function ViewBoard() {
  const {state} = useLocation()

  return (
    <ViewBoardDiv>
      <TextDiv>
        <TitleText>{state.title}</TitleText>
        <DateIdTextDiv>
          <IdText>{state.user}</IdText>
          <DateText>{state.date.substring(0,10).replace(/-/g,' . ')}</DateText>
        </DateIdTextDiv>
      </TextDiv>
      <ExplainText>{state.explain}</ExplainText>
    </ViewBoardDiv>
  )
}

export default ViewBoard