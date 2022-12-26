import React from 'react'
import { LoginDiv, LoginForm, LoginCard, ButtonInput, TextInput, InputDiv,SignInLink } from './styled_login'

function Signin() {
  let id_state : String = "";
  let password_state : String = "";
  const onChangeId = (e:any) =>{
    id_state = e.target.value;
    console.log(id_state);
  }
  const onChangePassword = (e:any) =>{
    password_state = e.target.value;
  }
  const onSubmit = (e:any)=>{
    e.preventDefault();
  }
  return (
    <LoginDiv>
      <LoginForm method='post' onSubmit={onSubmit}>
        <LoginCard>
          <InputDiv>
            <TextInput type="text" placeholder='아이디' onChange={onChangeId}/>
            <TextInput type="password" placeholder='비밀번호' onChange={onChangePassword}/>
            <ButtonInput type="submit" value="로그인"/>
            <SignInLink to='/Signup'>회원가입</SignInLink>
          </InputDiv>
        </LoginCard>
      </LoginForm>
    </LoginDiv>
  )
}

export default Signin