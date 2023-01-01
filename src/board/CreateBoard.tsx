import React, { ChangeEvent, useRef, useState } from 'react'
import {
  CreateDiv,
  TitleInput,
  ExplainInput,
  ImageInput,
  ImageDiv,
  UploadImage,
  UploadText,
  ResultImgText,
  UploadImageDiv,
  ResultImageDiv,
  ResultImage,
  ResultText,
  ResultTextDiv

} from './styled_create_board'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
function CreateBoard() {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
  const [imageFile, setImageFile] = useState<String | any>({
    imageFile: "",
    viewUrl: ""
  })
  let imageRef = useRef<HTMLInputElement>(null)
  const onChangeUploadHandler = (e: ChangeEvent<HTMLInputElement> | any): void => {
    console.log("사진 업로드 버튼 클릭");
    e.preventDefault();

    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImageFile({
        imageFile: e.target.files[0],
        viewUrl: fileReader.result
      });
    };

    console.log(imageFile.viewUrl);
  };
  return (
    <CreateDiv>
      <TitleInput placeholder='제목을 입력해 주세요' isMedia={isDesktopOrMobile}></TitleInput>
      <ExplainInput placeholder='내용을 입력해주세요' isMedia={isDesktopOrMobile}></ExplainInput>
      <ImageInput type='file' accept='image/*' ref={imageRef} onChange={onChangeUploadHandler}></ImageInput>
      <ImageDiv>
        <UploadImageDiv onClick={(e) => {
          e.preventDefault()
          imageRef.current?.click()
        }} isMedia={isDesktopOrMobile}>
          {imageFile.viewUrl === "" ? (<UploadText>사진 업로드</UploadText>) : (
            <UploadImage src={imageFile.viewUrl} isMedia={isDesktopOrMobile} />)}
        </UploadImageDiv>
        <ResultImageDiv isMedia={isDesktopOrMobile}>
          <ResultImgText>결과 사진 <br/><br/>대기중</ResultImgText>
        </ResultImageDiv>
      </ImageDiv>
      <ResultTextDiv  isMedia={isDesktopOrMobile} >
        <ResultText>
          생장속도 판별 :
        </ResultText>
        <ResultText>
          병충해 판별 :
        </ResultText>
      </ResultTextDiv>
    </CreateDiv>
  )
}

export default CreateBoard