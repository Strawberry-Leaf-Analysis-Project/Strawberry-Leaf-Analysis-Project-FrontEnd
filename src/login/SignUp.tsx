import React, { useState } from 'react'
import axios from 'axios';
import {
  LoginDiv,
  LoginForm,
  LoginCard,
  ButtonInput,
  TextInput,
  InputDiv,
  TitleText,
  SubTitleDiv,
  SubTitleText,
  PasswordCheckText
} from './styled_login'
import {
  StarText,
  StarTextDiv,
  EmailSubmit,
  EamilDiv
} from './styled_singup'
import { MEMBER_API } from '../api/ApiStorage';
function SingUp() {
  const [idState, setIdState] = useState<string>("")
  const [passwordState, setPasswordState] = useState<string>("")
  const [passwordCheckState, setPasswordCheckState] = useState<string>("")
  const [nameState, setNameState] = useState<string>("")
  const [emailState, setEmailState] = useState<string>("")
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const onChangeId = (e: any) => {
    setIdState(e.target.value);
  }
  const onChangePassword = (e: any) => {
    setPasswordState(e.target.value);
  }
  const onChangeCheckPassword = (e: any) => {
    setPasswordCheckState(e.target.value);
  }
  const onChangeName = (e: any) => {
    setNameState(e.target.value);
  }
  const onChangeEmail = (e: any) => {
    setEmailState(e.target.value);
  }
  const onEmailSubmit = ()=>{

  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (passwordCheckState === passwordState) {
      setPasswordCheck(false)
      MEMBER_API.SING_UP(idState, passwordState, nameState, emailState)
    }
    else {
      console.log('비밀번호 다름')
      setPasswordCheck(true)
    }
  }
  return (
    <LoginDiv>
      <LoginForm method='post' onSubmit={onSubmit}>
        <LoginCard>
          <InputDiv>
            <TitleText>Paradise Farm</TitleText>
            <SubTitleDiv>
              <StarTextDiv>
                <SubTitleText>아이디</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <TextInput width={200} height={20} type="text" placeholder='ID (영문+숫자 4~20자)' onChange={onChangeId} pattern="^[a-zA-Z](?=.{0,28}[0-9])[0-9a-zA-Z]{3,19}$" required />
            </SubTitleDiv>
            <SubTitleDiv>
              <StarTextDiv>
                <SubTitleText>비밀번호</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <TextInput width={200} height={20} type="password" placeholder='Password (8~16자)' onChange={onChangePassword} minLength={8} maxLength={16} required />
            </SubTitleDiv>
            <SubTitleDiv>
              <StarTextDiv>
                <SubTitleText>비밀번호 재확인</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <TextInput width={200} height={20} type="password" placeholder='Password 와 동일하게 입력' onChange={onChangeCheckPassword} minLength={8} maxLength={16} required />
              {passwordCheck ? (
                <PasswordCheckText>비밀번호가 다릅니다.</PasswordCheckText>
              ) : (null)}
            </SubTitleDiv>
            <SubTitleDiv>
              <StarTextDiv>
                <SubTitleText>이름</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <TextInput width={200} height={20} type="text" placeholder='한글과 영어만 입력' onChange={onChangeName} pattern="^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$" required />
            </SubTitleDiv>
            <SubTitleDiv>
              <StarTextDiv>
                <SubTitleText>이메일</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <EamilDiv>
                <TextInput width={200} height={20} type="email" placeholder='E-mail 입력' onChange={onChangeEmail} required />
                <EmailSubmit onClick={onEmailSubmit}>확인</EmailSubmit>
              </EamilDiv>
            </SubTitleDiv>
            <StarTextDiv>
              <StarText>*</StarText>
              <SubTitleText>는 필수 입력값 입니다.</SubTitleText>
            </StarTextDiv>
            <ButtonInput type="submit" value="가입하기" />
          </InputDiv>
        </LoginCard>
      </LoginForm>
    </LoginDiv>
  )
}

export default SingUp