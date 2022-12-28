import styled, { keyframes,css } from "styled-components";

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
    justify-content: center;
    ${(props)=>props.isModal ?  modal : cloose};
    transition: all 0.3s;
        /* animation: ${(props)=> (props.isModal ?css`${modal_show} 0.3s linear` :css`${modal_close} 0.3s linear`)};
    display: ${(props)=>(props.isModal ?css`flex`:css`none`)}; */
`   