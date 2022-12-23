import styled from "styled-components";

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
`
export const InputDiv = styled.div`
  display: grid;
  place-content: center;
  place-items: center;    
  padding: 20px;
  gap: 25px;
`
export const TextInput = styled.input`
    width:200px;
    height: 20px;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    border: none;
    font-family: inherit;
    font-size: 15px;
    padding: 3px;
    border-radius: 5px;
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
// export const 