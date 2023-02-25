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
  CategorySelect,
  LearningImg,
  LodingImg,
  LodingImgDiv,
  LodingText
} from './styled_create_board'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import { BOARD_API, PLANTS_GROUP_API } from '../api/ApiStorage'
import { SortationOption } from '../modal/styled_modal'
import { Image, Input, Output } from '../type/Interface'
import { useQuery } from 'react-query'
import Bean from '../assets/image/Bean.gif'
import Loding from '../assets/image/loding.gif'
function CreateBoard() {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
  const [imageFile, setImageFile] = useState<Image>({
    imageFile: "",
    viewUrl: ""
  })
  const [inputs, setInputs] = useState<Input>({
    title: "",
    explain: "",
    id: "",
    group_name: "non"
  })
  const [outputs, setOutputs] = useState<Output>({
    id: "",
    output_image: ""
  })
  const [loding, setLoding] = useState<boolean>(false)
  const [write, setWrite] = useState<boolean>(false)
  const [learning, setLearning] = useState<boolean>(false)
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
  }, [group])
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
    setOutputs({
      id: "",
      output_image: ""
    })
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
    setWrite(false)
  };
  const onLearning = async () => {
    await BOARD_API.INPUT_BOARD(inputs, imageFile)
    setLoding(true)
    setOutputs(await BOARD_API.OUTPUT_BOARD(inputs))
    setLoding(false)
    setWrite(true)
  }
  const onSubmitResult = async (e: any) => {
    e.preventDefault();
    setLearning(true)
    await BOARD_API.WRITE_BOARD(inputs, outputs)
    setLearning(false)
    window.location.replace("/")
  }

  return (
    <CreateDiv method='post' onSubmit={onSubmitResult}>
      {learning ? (
        <LodingImgDiv>
          <LodingImg src={Loding}></LodingImg>
          <LodingText>게시글 작성중 ...</LodingText>
        </LodingImgDiv>) : (null)}
      <CategorySelect name='group_name' isMedia={isDesktopOrMobile} onChange={onChangeText}>
        <SortationOption value='non'>선택해주세요.</SortationOption>
        {category === null ? (null) : (
          category.map((element: any) => {
            if (element.user === inputs.id) {
              return <SortationOption value={element.name}>{element.name}</SortationOption>
            }
            else {
              return null
            }
          })
        )}
      </CategorySelect>
      <TitleInput type='text' name='title' placeholder='제목을 입력해 주세요' isMedia={isDesktopOrMobile} value={title} onChange={onChangeText} required></TitleInput>
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
        {loding ? (<LearningImg src={Bean}></LearningImg>) : (null)}
        <ResultImageDiv isMedia={isDesktopOrMobile}>
          {outputs.id === "" ? (<ResultImgText>
            결과 사진 <br /><br />대기중
          </ResultImgText>) : (<ResultImage src={outputs.output_image} isMedia={isDesktopOrMobile} />)}
        </ResultImageDiv>
      </ImageDiv>
      <ResultTextDiv isMedia={isDesktopOrMobile}>
        <ResultText>
          생장속도 판별 : 미정
        </ResultText>
        <ResultText>
          병충해 판별 : 미정
        </ResultText>
      </ResultTextDiv>
      {write ? (<ResultButton type='submit' value='게시글 작성'></ResultButton>) : (<ResultButton type='button' value='딸기잎 학습' onClick={onLearning}></ResultButton>)}
    </CreateDiv>
  )
}

export default CreateBoard