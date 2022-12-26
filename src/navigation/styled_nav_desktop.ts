import styled from "styled-components";
import { Link } from 'react-router-dom';
export const NavDesktopDiv = styled.div`
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 30px;
`
export const StyledLinkDesktopTitle = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 23px;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
`
export const StyledLinkText = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 17px;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
`