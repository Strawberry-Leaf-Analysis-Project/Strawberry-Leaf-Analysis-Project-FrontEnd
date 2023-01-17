import styled from "styled-components";

export const DiaryBoardDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`
export const DiaryDetailDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.7px solid gray;
    padding-bottom: 20px;
`
export const DiaryDetailIdNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const  DiaryDetailBoardText = styled.div`
    display: flex;
    align-items: flex-end;
`
export const  DiaryDetailNameText = styled.div`
    font-size: 20px;
`
export const  DiaryDetailIdText = styled.div`
    font-size: 15px;
`
export const DiaryBoardListDiv = styled.div<{isMedia:boolean}>`
    display: grid;
    grid-template-columns: ${(props)=>props.isMedia ? 'repeat(auto-fill,minmax(160px,1fr))' : 'repeat(auto-fill,minmax(220px,1fr))'};
    justify-items: center;
    gap: 10px;
`    