import React from 'react'
import { MenuDiv } from './styled_Menu'
import { MenuLogInTitle,MenuLogOutTitle } from './MenuTitle'
import { MenuTitleDiv } from './styled_Menu'
import { LOGOUT } from "../api/ApiStorage"
function UserMenu({ setTogle, userData }: any) {
  const onTogle = () => {
    setTogle(false)
  }
  const onLogout =async(title:string)=>{
    if(title==='로그아웃'){
      await LOGOUT()
      window.location.replace("/")
    }
  }
  return (

    <MenuDiv>
      {userData !== null ? (MenuLogOutTitle.map((element,index) => (
        <MenuTitleDiv key={index} to={element.url} onClick={()=>{
          onTogle() 
          onLogout(element.title)
        }}> {element.title}</MenuTitleDiv>
      ))) : (MenuLogInTitle.map((element,index) => (
        <MenuTitleDiv key={index} to={element.url} onClick={onTogle}> {element.title}</MenuTitleDiv>
      )))}

    </MenuDiv>
  )
}

export default UserMenu