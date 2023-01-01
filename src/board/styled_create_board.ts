import styled from "styled-components";

export const CreateDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    gap: 20px;
`
export const TitleInput = styled.input<{isMedia:boolean}>`
    width: ${(props)=>props.isMedia ? '300px' : '500px'};
    ::placeholder{
        font-size: 12px;
    }
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
    /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3); */
    /* background-color: #CCE4FC; */
    border: none;
    font-family: inherit;
    font-size: 15px;
    padding: 10px;
    border-radius: 4px;
    outline: none;
`
export const ExplainInput = styled.textarea<{isMedia:boolean}>`
    width: ${(props)=>props.isMedia ? '300px' : '500px'};
    height: ${(props)=>props.isMedia ? '15em' : '20em'};
    border: none;
    resize: none;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
    /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3); */
    /* background-color: #CCE4FC; */
    border: none;
    font-family: inherit;
    font-size: 15px;
    padding: 10px;
    border-radius: 4px;
    outline: none;
`
export const ImageInput = styled.input`
    display: none;
`
export const ImageDiv = styled.div`
    display: flex;
    gap: 20px;
    font-weight: bold;
`
export const UploadImage = styled.img<{isMedia:boolean}>`
    width: ${(props)=>props.isMedia ? '120px' : '200px'};
    height: ${(props)=>props.isMedia ? '120px' : '200px'};
    border-radius: 5px;
`
export const ResultImage = styled.img<{isMedia:boolean}>`
    width: ${(props)=>props.isMedia ? '120px' : '200px'};
    height: ${(props)=>props.isMedia ? '120px' : '200px'};
    border-radius: 5px;
`
export const UploadImageDiv = styled.div<{isMedia:boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props)=>props.isMedia ? '120px' : '200px'};
    height: ${(props)=>props.isMedia ? '120px' : '200px'};
    background-color: #5FB636;
    border-radius: 5px;
    cursor: pointer;
`
export const ResultImageDiv = styled.div<{isMedia:boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props)=>props.isMedia ? '120px' : '200px'};
    height: ${(props)=>props.isMedia ? '120px' : '200px'};
    background-color: #515151;
    border-radius: 5px;
`
export const UploadText = styled.div`
    color: white;
`
export const ResultImgText = styled.div`
    color: white;
`
export const ResultTextDiv = styled.div<{isMedia:boolean}>`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: ${(props)=>props.isMedia ? '300px' : '500px'};
    background-color: white;
    padding: 10px;
    border-radius: 4px;
`
export const ResultText = styled.div`
    font-size: 15px;
`