import React, { useState } from 'react'
import { NavDiv } from './styled_nav'
import { useMediaQuery } from 'react-responsive'
import { NavDesktopDiv, StyledLinkDesktopTitle, StyledLinkText } from './styled_nav_desktop'
import { NavMobileDiv,StyledLinkMobileTitle, MenuMobileDiv, MenuMobileImgDiv } from './styled_nav_mobile'
import Menu from '../assets/icons/Menu.svg'
import UserMenu from '../userMenu/Menu'
function Nav() {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
  const [togle, setTogle] = useState<boolean>(false);
  const MenuTogle = () => {
    if (togle) {
      setTogle(false);
    }
    else {
      setTogle(true);
    }
  };
  return (
    <NavDiv>
      {!isDesktopOrMobile ?
        (<NavDesktopDiv>
          <StyledLinkDesktopTitle to='/'>Paradise Farm</StyledLinkDesktopTitle>
          <StyledLinkText to='/growth_board'>생장 게시판</StyledLinkText>
          <StyledLinkText to='/my_growth_diary'>나의 생장 일지</StyledLinkText>
          <StyledLinkText to='/Singin'>로그인</StyledLinkText>
        </NavDesktopDiv>)
        :
        (<NavMobileDiv>
          <StyledLinkMobileTitle to='/'>Paradise Farm</StyledLinkMobileTitle>
          <MenuMobileDiv>
            <MenuMobileImgDiv src={Menu} onClick={MenuTogle}></MenuMobileImgDiv>
            {togle ? (<UserMenu />) : (null)}
          </MenuMobileDiv>
        </NavMobileDiv>)}
    </NavDiv>
  )
}

export default Nav