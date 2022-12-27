import styled from "styled-components";

export const BoardDiv = styled.div`
    min-height: 100vh;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
`
export const CardListDiv = styled.div`
    display: flex;
    gap: 20px;
    ::-webkit-scrollbar{
        display: none;
    }
    scroll-behavior: smooth;
    overflow: auto;
    scroll-snap-type: x mandatory;
`
export const CardDiv = styled.div`
    scroll-snap-align: start;
`
export const ArrowDiv = styled.div`
    display: flex;
   justify-content: space-between;
   
   align-items: center;
`
export const IconLeftDiv = styled.div`
    padding-right: 20px;
`
export const IconRightDiv = styled.div`
    padding-left: 20px;
`