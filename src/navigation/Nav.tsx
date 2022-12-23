import React from 'react'
import { NavDiv } from './styled_nav'
import { useMediaQuery } from 'react-responsive'
import { NavDesktopDiv, LogoDesktopDiv, MenuDesktopDiv, MenuDesktopImgDiv } from './styled_nav_desktop'
import { NavMobileDiv, LogoMobileDiv, MenuMobileDiv, MenuMobileImgDiv } from './styled_nav_mobile'
import User from '../assets/icons/User.svg'
import Menu from '../assets/icons/Menu.svg'
function Nav() {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' })
  return (
    <NavDiv>
      {!isDesktopOrMobile ?
        (<NavDesktopDiv>
          <LogoDesktopDiv>딸기 Leaf</LogoDesktopDiv>
          <MenuDesktopDiv>
            <MenuDesktopImgDiv src={User}></MenuDesktopImgDiv>
          </MenuDesktopDiv>
        </NavDesktopDiv>)
        :
        (<NavMobileDiv>
          <LogoMobileDiv>딸기 Leaf</LogoMobileDiv>
          <MenuMobileDiv>
            <MenuMobileImgDiv src={Menu}></MenuMobileImgDiv>
          </MenuMobileDiv>
        </NavMobileDiv>)}
    </NavDiv>
  )
}

export default Nav