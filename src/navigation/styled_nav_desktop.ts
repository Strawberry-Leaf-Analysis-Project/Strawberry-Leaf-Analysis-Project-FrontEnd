import styled from "styled-components";
import { Link } from 'react-router-dom';
export const NavDesktopDiv = styled.div`
    height: 55px;
    background-color: #353535;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 30px;
`
export const StyledLinkTitle = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 30px;
    color: #FFFFFF;
    cursor: pointer;
`
export const StyledLinkText = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
`