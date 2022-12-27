import styled from "styled-components";
import { Link } from 'react-router-dom';
export const LoginDiv = styled.div`
    display: grid;
    justify-content: center;
    padding-top: 20px;
    min-height: 100vh;
    overflow: scroll;
`
export const LoginForm = styled.form`
`
export const TitleText = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`
export const LoginCard = styled.div`
    width: 300px;
`
export const SubTitleDiv = styled.div`
    display: grid;
    gap: 10px;
`

export const SubTitleText = styled.div`
    font-size: 12px;
    font-weight: bold;
`
export const InputDiv = styled.div`
  display: grid;
  place-content: center;
  place-items: center;    
  padding: 20px;
  gap: 35px;
`
export const TextInput = styled.input`
    width:200px;
    height: 20px;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    background-color: #D1D9FC;
    border: none;
    font-family: inherit;
    font-size: 15px;
    padding: 10px;
    border-radius: 4px;
    ::placeholder{
        font-size: 10px;
    }
    :focus{
    outline: 1.5px solid #484848;
    }
    :hover{
    transition: 0.05s;
    outline: 1.5px solid #484848;
 }
    
`
export const ButtonInput = styled.input`
    border: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    font-family: inherit;
    width: 200px;
    height: 40px;
    cursor: pointer;
    transition: all ease 0.5s 0s;
    font-size: 15px;
    border-radius: 2px;
    outline: none;
    background-color: #5FB636;
    color: white;
 :hover{
    border-radius: 8px;
    width: 220px;
    transition: all ease 0.4s 0s;
    font-weight: bold;
 }
`
export const SignInLinkDiv = styled.div`
    display: flex;
    gap: 10px;
`
export const BoundaryText = styled.div`
    font-size: 12px;
`
export const SerachText = styled.div`
    font-size: 12px;
    cursor: pointer;
`
export const SignInLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 12px;
    outline: none;
    color: white;
    cursor: pointer;
`   