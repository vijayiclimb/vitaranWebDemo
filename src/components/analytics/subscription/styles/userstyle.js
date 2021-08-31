import styled from 'styled-components'

export const Container = styled.div`
padding: 15px;
background-color: white;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75); 
margin-top: 20px;


display: flex;
flex-direction: column;

`

export const Table=styled.div`
padding: 10px;
flex: 2.5;
`

export const TableContainerS = styled.div`
flex:2;
`

export const User=styled.div`
padding: 10px;
flex: 1;
`

export const Title=styled.label`
font-weight: 600;
font-size: 20px;
margin-top:10px;
`

export const SubTitle=styled.label`
color: red;
font-weight: 600;
font-size: 16px;
margin-top:5px;
margin-bottom:15px;
`

export const TitleContainer=styled.div`
display: flex;
flex-direction: column;
`


export const DetailContainer=styled.div`
display: flex;
flex-direction:row;
`

export const Button=styled.button`
border: 2px solid red;
padding: 5px 10px 5px 10px;
color: red;
background-color: white;
border-radius: 0.35rem;

&:hover{
        color: white;
        background-color: red;
}
`