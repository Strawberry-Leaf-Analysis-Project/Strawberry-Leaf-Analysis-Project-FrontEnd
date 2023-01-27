import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
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
  ResultTextDiv,
  ResultButton,
  CategorySelect

} from './styled_create_board'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import { BOARD_API, PLANTS_GROUP_API } from '../api/ApiStorage'
import { SortationOption } from '../modal/styled_modal'
import { Image, Input } from '../type/Interface'
import { useQuery } from 'react-query'
function CreateBoard() {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
  const [imageFile, setImageFile] = useState<Image>({
    imageFile: "",
    viewUrl: ""
  })
  const [inputs, setInputs] = useState<Input>({
    title: "",
    explain: "",
    id: ""
  })
  const group = useQuery('group', async () => {
    return await PLANTS_GROUP_API.GET_GROUP()
  })
  const category = useMemo(() => {
    if (group.isLoading) {
      return null
    }
    else {
      return group.data
    }
  }, [])
  useEffect(() => {
    const GET_DATA: any = window.localStorage.getItem('data')
    setInputs({
      ...inputs,
      ['id']: JSON.parse(GET_DATA)['id']
    })
  }, [])

  const onChangeText = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    console.log(value)
  }
  const { title, explain } = inputs
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
  };
  const onSubmitResult = async (e: any) => {
    e.preventDefault();
    console.log(title);
    console.log(explain);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('explain', explain);
    console.log(imageFile.imageFile['name'])
    formData.append('image', imageFile.imageFile);
    await BOARD_API.CREATE_BOARD(inputs, imageFile)
    window.location.replace("/")
  }

  return (
    <CreateDiv method='post' onSubmit={onSubmitResult} >
      <TitleInput type='text' name='title' placeholder='제목을 입력해 주세요' isMedia={isDesktopOrMobile} value={title} onChange={onChangeText} required></TitleInput>
      <CategorySelect isMedia={isDesktopOrMobile}>
        {category === null ? (null) : (
          category.map((element:any)=>{
            if (element.user === inputs.id){
              return <SortationOption value={element.name}>{element.name}</SortationOption>
            }
            else{
              return null
            }
          })
        )}
      </CategorySelect>


      <ExplainInput name='explain' placeholder='내용을 입력해주세요' isMedia={isDesktopOrMobile} value={explain} onChange={onChangeText} required></ExplainInput>
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
          <ResultImgText>결과 사진 <br /><br />대기중</ResultImgText>
        </ResultImageDiv>
      </ImageDiv>
      <ResultTextDiv isMedia={isDesktopOrMobile} >
        <ResultText>
          생장속도 판별 :
        </ResultText>
        <ResultText>
          병충해 판별 :
        </ResultText>
      </ResultTextDiv>
      <ResultButton type='submit' value='게시글 작성'></ResultButton>
    </CreateDiv>
  )
}

export default CreateBoard