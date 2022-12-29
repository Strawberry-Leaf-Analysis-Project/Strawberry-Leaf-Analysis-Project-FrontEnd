import styled from "styled-components";
export const BoardDiv = styled.div`
    min-height: 100vh;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    padding-bottom: 20px;
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
    .title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .contents{
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
    }
    .name{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
export const ArrowDiv = styled.div`
    display: flex;
   justify-content: space-between;
   align-items: center;
`
export const IconLeftDiv = styled.div`
    margin-right: 10px;
    cursor: pointer;
`
export const IconRightDiv = styled.div`
    margin-left: 10px;
    cursor: pointer;
`
export const EditIconDiv = styled.div`
    display: flex;
    position: fixed;
    bottom: 5%;
    right: 5%;
`
export const EditIcon = styled.img`
    background-color: #5FB636;
    border-radius:7px;
    cursor: pointer;
`
export const SortText = styled.div`
    margin-bottom: 20px;
    margin-left: 45px;
    margin-top: 20px;
    font-size: 20px;
    font-family: 'NanumSquareNeo-B';

`