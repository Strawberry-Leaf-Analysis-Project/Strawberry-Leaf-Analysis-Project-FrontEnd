import React from 'react'
import {MenuDiv} from './styled_Menu'
import {MenuTitle} from './MenuTitle'
import { MenuTitleDiv } from './styled_Menu'
function UserMenu({setTogle}:any) {
  console.log(MenuTitle[0].title)
  const onTogle = () =>{
    setTogle(false)
  }
  return (

    <MenuDiv>
      {MenuTitle.map((element)=>(
        <MenuTitleDiv to={element.url} onClick={onTogle}> {element.title}</MenuTitleDiv>
      ))}
    </MenuDiv>
  )
}

export default UserMenu