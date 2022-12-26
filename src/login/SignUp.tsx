import React from 'react'
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
  SubTitleText
} from './styled_login'
import {
  StarText,
  StarTextDiv
} from './styled_singup'
function SingUp() {
  let id_state: String = "";
  let password_state: String = "";
  let password_check_state: String = "";
  let name_state: String = "";
  const onChangeId = (e: any) => {
    id_state = e.target.value;
    console.log(id_state);
  }
  const onChangePassword = (e: any) => {
    password_state = e.target.value;
  }
  const onChangeCheckPassword = (e: any) => {
    password_check_state = e.target.value;
  }
  const onChangeName = (e: any) => {
    name_state = e.target.value;
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
              <StarTextDiv>
                <SubTitleText>아이디</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <TextInput type="text" placeholder='ID (영문+숫자 4~20자)' onChange={onChangeId} pattern="^[a-zA-Z](?=.{0,28}[0-9])[0-9a-zA-Z]{3,19}$" required />
            </SubTitleDiv>
            <SubTitleDiv>
              <StarTextDiv>
                <SubTitleText>비밀번호</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <TextInput type="password" placeholder='Password (8~16자)' onChange={onChangePassword} pattern="{7,15}" required />
            </SubTitleDiv>
            <SubTitleDiv>
              <StarTextDiv>
                <SubTitleText>비밀번호 재확인</SubTitleText>
                <StarText>*</StarText>
              </StarTextDiv>
              <TextInput type="password" placeholder='Password 와 동일하게 입력' onChange={onChangeCheckPassword} pattern="{7,15}" required />
            </SubTitleDiv>
            <SubTitleDiv>
              <SubTitleText>이름</SubTitleText>
              <TextInput type="text" placeholder='한글과 영어만 입력' onChange={onChangeName} pattern="^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$" />
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