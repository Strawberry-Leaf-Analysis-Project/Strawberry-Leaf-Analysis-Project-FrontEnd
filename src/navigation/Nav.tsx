import React from 'react'
import { NavDiv } from './styled_nav'
import { useMediaQuery } from 'react-responsive'
function Nav() {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width:768px)'})
  return (
    <NavDiv>
      {!isDesktopOrMobile ?(<>웹</>):(<>폰</>) }
    </NavDiv>
  )
}

export default Nav