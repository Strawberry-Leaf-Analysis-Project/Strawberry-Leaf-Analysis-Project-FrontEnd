import styled from "styled-components";
import { Link } from 'react-router-dom';
export const LoginDiv = styled.div`
    font-family: 'NanumSquareNeo-R';
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* background-color: red; */

`
export const LoginForm = styled.form`
`
export const LoginCard = styled.div`
    width: 300px;
    height: 300px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
`
export const InputDiv = styled.div`
  display: grid;
  place-content: center;
  place-items: center;    
  padding: 20px;
  gap: 40px;
`
export const TextInput = styled.input`
    width:200px;
    height: 30px;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    border: none;
    font-family: inherit;
    font-size: 15px;
    padding: 3px;
    border-radius: 5px;
    :focus{
    outline: 2px solid black;
    }
    :hover{
    transition: 0.1s;
    outline: 1px solid black;
 }
    
`
export const ButtonInput = styled.input`

    border: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    font-family: inherit;
    width: 180px;
    height: 40px;
    cursor: pointer;
    transition: all ease 0.5s 0s;
    font-size: 18px;
    border-radius: 5px;
    outline: none;
 :hover{
    box-shadow: 0 0 5px 0 rgba(239, 239, 239, .5),
                0 0 5px 0 rgba(239, 239, 239, .5),
                0 0 5px 0 rgba(239, 239, 239, .5),
                0 0 5px 0 rgba(239, 239, 239, .5);
    color: white;
    background-color: black;
    transition: all ease 0.5s 0s;
 }
`
export const SignInLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    outline: none;
    color: black;
    cursor: pointer;
`   