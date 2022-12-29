import styled, { keyframes,css } from "styled-components";
import { Link } from 'react-router-dom';
export const modal_show = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`
export const modal_close = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`
export const modal = css`
    visibility: visible;
    animation: ${modal_show} 0.3s linear;
`
export const cloose = css`
    visibility: hidden;
    animation: ${modal_close} 0.3s linear;
`
export const CentetDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalDiv = styled.div<{isModal:boolean}>`
    display: flex;
    position: fixed;
    height: 160px;
    width: 270px;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    top: 30%;
    z-index: 999;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    ${(props)=>props.isModal ?  modal : cloose};
    transition: all ease 0.3s;
        /* animation: ${(props)=> (props.isModal ?css`${modal_show} 0.3s linear` :css`${modal_close} 0.3s linear`)};
    display: ${(props)=>(props.isModal ?css`flex`:css`none`)}; */
`
export const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
`
export const TitleText  = styled.div`

`
export const ConfirmButton = styled(Link)<{isModal:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  :hover{
    transition: all ease 0.3s 0s;
    background-color: #5FB636;
    color: white;
 }
 color: black;
 ${(props)=>props.isModal ?  modal : cloose};
 text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`   
export const CancelButton = styled.div<{isModal:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover{
    transition: all ease 0.3s 0s;
    background-color: #515151;
    color: white;
 }
 ${(props)=>props.isModal ?  modal : cloose};
`