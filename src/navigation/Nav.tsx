import React, { useEffect, useState } from 'react'
import { NavDiv } from './styled_nav'
import { useMediaQuery } from 'react-responsive'
import {
  NavDesktopDiv,
  StyledLinkDesktopTitle,
  StyledLinkText,
  LogoutText,
  SearchDiv,
  SearchImgDiv,
  SearchText,
  SearchSubmit
} from './styled_nav_desktop'
import { NavMobileDiv, StyledLinkMobileTitle, MenuMobileDiv, MenuMobileImgDiv } from './styled_nav_mobile'
import { LOGOUT } from '../api/ApiStorage'
import Menu from '../assets/icons/Menu.svg'
import UserMenu from '../userMenu/Menu'
import { userData } from '../data/userData'
import { useNavigate } from 'react-router-dom'
function Nav() {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
  const [togle, setTogle] = useState<boolean>(false);
  const [serach,setSerach] = useState<string>('');
  const navigate = useNavigate()
  const MenuTogle = () => {
    if (togle) {
      setTogle(false);
    }
    else {
      setTogle(true);
    }
  };
  const onLogout = async () => {
    await LOGOUT()
    window.location.replace("/")
  }
  const onSearch= (e:any) =>{
    e.preventDefault();
    setSerach(e.target.value)
  }
  const onSubmit= (e:any) =>{
    e.preventDefault();
    navigate(`/search/${serach}`,{
      state:{
          text:serach
      }
  })
  window.location.replace(`./${serach}`)
  }
  return (
    <NavDiv>
      {!isDesktopOrMobile ?
        (<NavDesktopDiv>
          <StyledLinkDesktopTitle to='/'>Paradise Farm</StyledLinkDesktopTitle>
          <SearchDiv onSubmit={onSubmit}>
            <SearchText type='text' placeholder='제목,작성자로 검색하세요.' onChange={onSearch}/>
            <SearchSubmit type='submit'/>
          </SearchDiv>
          <StyledLinkText to='/growth_board'>생장 게시판</StyledLinkText>
          <StyledLinkText to='/my_growth_diary'>나의 생장 일지</StyledLinkText>
          {userData !== null ? (<LogoutText onClick={onLogout}>로그아웃</LogoutText>) : (<StyledLinkText to='/Singin'>로그인</StyledLinkText>)}

        </NavDesktopDiv>)
        :
        (<NavMobileDiv>
          <StyledLinkMobileTitle to='/' onClick={() => setTogle(false)}>Paradise Farm</StyledLinkMobileTitle>
          <SearchDiv onSubmit={onSubmit}>
            <SearchText placeholder='제목,작성자로 검색하세요.' onChange={onSearch}/>
            <SearchSubmit type='submit'/>
          </SearchDiv>
          <MenuMobileDiv>
            <MenuMobileImgDiv src={Menu} onClick={MenuTogle}></MenuMobileImgDiv>
            {togle ? (<UserMenu setTogle={setTogle} userData={userData} />) : (null)}
          </MenuMobileDiv>
        </NavMobileDiv>)}
    </NavDiv>
  )
}

export default Nav