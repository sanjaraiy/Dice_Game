import styled from 'styled-components';



export const Button=styled.button`
    padding:10px 18px;
    background:#000;
    border-radius:5px;
    color:#fff;
    font-size:15px;
    font-weight:400;
    cursor:pointer;
    width:220px;
    border:none;
    border:1px solid transparent;
    transition:0.4s background ease-in;

    &:hover{
       background-color:#fff;
       border:1px solid black;
       color:black;
       transition:0.3s background ease-in;

    }
`

export const OutlineButton = styled(Button)`
    padding:10px 18px;
    background:#fff;
    border-radius:5px;
    color:#000;
    font-size:15px;
    font-weight:400;
    cursor:pointer;
    width:220px;
    border:none;
    border:1px solid #000;
    transition:0.4s background ease-in;

    &:hover{
       background-color:#000;
       border:1px solid transparent;
       color:#fff;
       transition:0.3s background ease-in;

    }
`