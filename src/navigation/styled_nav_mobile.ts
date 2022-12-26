import styled from "styled-components";
import { Link } from 'react-router-dom';
export const NavMobileDiv = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
`

export const LogoMobileDiv = styled.div`
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;

`
export const StyledLinkMobileTitle = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 17px;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
` 
export const MenuMobileDiv = styled.div`
`
export const MenuMobileImgDiv = styled.img`
    width: 25px;
    cursor: pointer;
`