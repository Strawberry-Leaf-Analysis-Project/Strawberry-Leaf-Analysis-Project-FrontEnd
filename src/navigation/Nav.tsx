import React, { useState } from 'react'
import { NavDiv } from './styled_nav'
import { useMediaQuery } from 'react-responsive'
import { NavDesktopDiv, StyledLinkTitle, StyledLinkText } from './styled_nav_desktop'
import { NavMobileDiv, LogoMobileDiv, MenuMobileDiv, MenuMobileImgDiv } from './styled_nav_mobile'
import Menu from '../assets/icons/Menu.svg'
import UserMenu from '../userMenu/Menu'
import { Link } from 'react-router-dom'
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
          <StyledLinkTitle to='/'>딸기 Leaf</StyledLinkTitle>
          <StyledLinkText to='/growth_board'>생장 게시판</StyledLinkText>
          <StyledLinkText to='/my_growth_diary'>나의 생장 일지</StyledLinkText>
          <StyledLinkText to='/login'>로그인</StyledLinkText>
        </NavDesktopDiv>)
        :
        (<NavMobileDiv>
          <LogoMobileDiv>딸기 Leaf</LogoMobileDiv>
          <MenuMobileDiv>
            <MenuMobileImgDiv src={Menu} onClick={MenuTogle}></MenuMobileImgDiv>
            {togle ? (<UserMenu />) : (null)}
          </MenuMobileDiv>
        </NavMobileDiv>)}
    </NavDiv>
  )
}

export default Nav