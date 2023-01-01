import styled,{ keyframes,css }  from "styled-components";
import { Link } from "react-router-dom";

export const menu_show = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`

export const MenuDiv = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    position: absolute;
    font-family: 'NanumSquareNeo-R';
    right: 3%;
    gap: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    animation: ${menu_show} 0.3s linear;
`       
export const MenuTitleDiv = styled(Link)`
    font-size: 14px;
        text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: black;
`