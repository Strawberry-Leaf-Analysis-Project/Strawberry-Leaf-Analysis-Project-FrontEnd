import React from 'react'
import axios from 'axios';
import {
  LoginDiv,
  LoginForm,
  LoginCard,
  ButtonInput,
  TextInput,
  InputDiv,
  SignInLink,
  SignInLinkDiv,
  BoundaryText,
  SerachText,
  TitleText,
  SubTitleDiv,
  SubTitleText
} from './styled_login'

function Signin() {
  let id_state: String = "";
  let password_state: String = "";

  const onChangeId = (e: any) => {
    id_state = e.target.value;
  }
  const onChangePassword = (e: any) => {
    password_state = e.target.value;
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
  }
  return (
    <LoginDiv>
      <LoginForm method='post' onSubmit={onSubmit}>
        <LoginCard>
          <InputDiv>
            <TitleText>Paradise Farm</TitleText>
            <SubTitleDiv>
              <SubTitleText>ID</SubTitleText>
              <TextInput type="text" placeholder='ID' onChange={onChangeId} />
            </SubTitleDiv>
            <SubTitleDiv>
              <SubTitleText>Password</SubTitleText>
              <TextInput type="password" placeholder='Password' onChange={onChangePassword} />
            </SubTitleDiv>
            <ButtonInput type="submit" value="로그인" />
            <SignInLinkDiv>
              <SerachText>아이디 찾기</SerachText>
              <BoundaryText>|</BoundaryText>
              <SerachText>비밀번호 찾기</SerachText>
              <BoundaryText>|</BoundaryText>
              <SignInLink to='/Singup'>회원가입</SignInLink>
            </SignInLinkDiv>
          </InputDiv>
        </LoginCard>
      </LoginForm>
    </LoginDiv>
  )
}

export default Signin