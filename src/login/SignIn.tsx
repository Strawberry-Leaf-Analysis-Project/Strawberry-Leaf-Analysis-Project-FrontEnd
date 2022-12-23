import React from 'react'
import { LoginDiv, LoginForm, LoginCard, ButtonInput, TextInput, InputDiv } from './styled_login'

function Signin() {
  return (
    <LoginDiv>
      <LoginForm method='post'>
        <LoginCard>
          <InputDiv>
            <TextInput type="text" placeholder='아이디'/>
            <TextInput type="password" placeholder='비밀번호'/>
            <ButtonInput type="submit" value="로그인"/>
          </InputDiv>
        </LoginCard>
      </LoginForm>
    </LoginDiv>
  )
}

export default Signin