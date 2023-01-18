import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
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
import { SING_IN,USER_DATA,LOGOUT } from '../api/ApiStorage';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const [id_state,setIdState] = useState<string>("")
  const [password_state,setPassword_state] = useState<string>("")
  const [userKey,setUserKey] = useState<number>(0)
  const [loginCheck, setLoginCheck] = useState(true)
  const navigate = useNavigate();
  const onChangeId = (e: any) => {
    setIdState(e.target.value);
  }
  const onChangePassword = (e: any) => {
    setPassword_state(e.target.value);
  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    SING_IN(id_state,password_state,setLoginCheck,setUserKey)
  }
  const goIdSearch = () =>{
    navigate('/Singin/IdSearch')
  }
  const goPasswordSearch = () =>{
    navigate('/Singin/PasswordSearch')
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
            {loginCheck ? (
              null
              ) : (
              <SubTitleText>아이디나 비밀번호를 확인해주세요.</SubTitleText>
              )}
            <ButtonInput type="submit" value="로그인" />
            <SignInLinkDiv>
              <SerachText onClick={goIdSearch}>아이디 찾기</SerachText>
              <BoundaryText>|</BoundaryText>
              <SerachText onClick={goPasswordSearch}>비밀번호 찾기</SerachText>
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