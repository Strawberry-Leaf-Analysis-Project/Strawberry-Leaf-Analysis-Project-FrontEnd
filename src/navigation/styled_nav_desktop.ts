import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavDesktopDiv = styled.div`
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 30px;
    font-family: 'MaplestoryOTFBold';
`
export const StyledLinkDesktopTitle = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 23px;
    font-weight: bold;
    color: black;
    cursor: pointer;
`
export const StyledLinkText = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 17px;
    font-weight: bold;
    color: black;
    cursor: pointer;
`
export const LogoutText = styled.div`
    font-size: 17px;
    font-weight: bold;
    color: black;
    cursor: pointer;
`
export const SearchImgDiv = styled.div`
    cursor: pointer;
`
export const SearchDiv = styled.form`
    display: flex;
    gap: 10px;
    width: 50%;
    height: 50%;
    margin-right: 10px;
`
export const SearchText = styled.input`
    outline: none;
    border-radius: 5px;
    border: none;
    height: 100%;
    width: 100%;
    padding: 5px;
`
export const SearchSubmit = styled.input`
    display: none;
`