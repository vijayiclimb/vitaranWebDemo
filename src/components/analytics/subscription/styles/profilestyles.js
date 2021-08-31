import styled from 'styled-components'


export const Container=styled.div`
margin-top:-10px;
background-color: white;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75); 
        padding: 10px;
flex-wrap: wrap;
`

export const FirmContainer=styled.div`
display: flex;
height: 10vw;
position: relative;


`

export const Firm =styled.img`
flex-basis: 100%;

`

export const ProfileContainer=styled.div`
height: 100px;
width: 100px;
border-radius: 50%;
padding: 10px;
position: absolute;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
transform: translate(150px,130px)
`

export const ProfileImg=styled.img`
height: 90px;
width: 90px;
border-radius: 50%;
`    

export const DetailContainer=styled.div`
margin-top: 60px;
`

export const Details=styled.div`
display: flex;
align-items: center;
`
export const DetailList=styled.div`
`
export const DetailsLabel=styled.div`
display: flex;
padding-left: 10px;
flex: 1;
align-items: center;


`
export const Label=styled.label`
font-weight: 800;
margin-top: 5px;
`
export const Icon=styled.div`
padding: 10px;
`

export const LabelValue=styled.label`
margin-left: 50px;
flex: 2;
font-weight: 800;
`
export const WeekContainer=styled.div`
background-color: #f2f2f2;
padding: 10px;
margin-top: 10px;
`
export const WeekOne=styled.div`

`

export const WeekTwo=styled.div`
margin-top: 20px;
`

export const Title=styled.label`
font-size: 14px;
font-weight: 800;
`

export const WeekCard=styled.div`
display: flex;


`

export const Card=styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
border: 2px solid  #716F6F;
padding: 0;
align-items: center;
border-radius:5px;

`


export const UsageCardValue=styled.label`
color: white;
background-color: gray;
padding: 8px 20px 8px 20px;
margin-bottom: 0px;
`

export const UsageCardTitle=styled.label`
padding: 10px;
padding-bottom:5px;
`
export const UsageAverageValue=styled.label`
color: white;
background-color: gray;
padding: 8px;
margin-bottom: 0px;
`

export const UsageAverageTitle=styled.label`
padding: 10px;
padding-bottom:5px;
`

export const UsageCardValu=styled.label`
color: white;
background-color: #053E5E;
padding: 8px 20px 8px 20px;
margin-bottom: 0px;
border-radius: 5px;
`
export const UsageAverageValu=styled.label`
color: white;
background-color: #053E5E;
padding: 8px;
margin-bottom: 0px;
border-radius: 5px;
`