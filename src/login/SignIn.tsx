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
function Signin() {
  const [id_state,setIdState] = useState<string>("")
  const [password_state,setPassword_state] = useState<string>("")
  const [userKey,setUserKey] = useState<number>(0)
  const [loginCheck, setLoginCheck] = useState(true)
  const onChangeId = (e: any) => {
    setIdState(e.target.value);
  }
  const onChangePassword = (e: any) => {
    setPassword_state(e.target.value);
  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    // LOGOUT(18)
    SING_IN(id_state,password_state,setLoginCheck,setUserKey)
    // console.log(USER_DATA(userKey))
  }
  // const {isLoading,data} = useQuery(['user',userKey],()=>{
  //   if(userKey!==0){
  //     return USER_DATA(userKey)
  //   }
  // },
  // // {
  // //   staleTime: 60 * 10 *10000, // 1분, default >> 0
  // // 	cacheTime: 60 * 5 * 1000 // 5분, default >> 5분
  // // }
  // )
  // console.log(isLoading,data)
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