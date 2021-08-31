import styled from 'styled-components'

export const Con = styled.div`
padding: 10px;
display:flex;
align-items:flex-end;
justify-content:flex-start;

`

export const Container = styled.div`
flex:1;
background-color: white;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75); 
        padding: 10px;
flex-wrap: wrap;
padding: 10px;
${'' /* max-height:725px;
min-height:725px; */}

`

export const FirmContainer = styled.div`
display: flex;
height: 10vw;
position: relative;


`

export const Firm = styled.img`
flex-basis: 100%;

`

export const ProfileContainer = styled.div`
height: 100px;
width: 100px;
border-radius: 50%;
padding: 10px;
position: absolute;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
transform: translate(140px,110px)
`

export const ProfileImg = styled.img`
height: 90px;
width: 90px;
border-radius: 50%;
`

export const DetailContainer = styled.div`
margin-top: 60px;
`

export const Details = styled.div`
display: flex;
align-items: center;
`
export const DetailList = styled.div`
`
export const DetailsLabel = styled.div`
display: flex;
padding-left: 10px;
flex: 1;
align-items: center;


`
export const Label = styled.label`
font-weight: 800;
margin-top: 5px;
`
export const Icon = styled.div`
padding: 10px;
`

export const LabelValue = styled.label`
margin-left: 50px;
flex: 2;
font-weight: 800;
`
export const WeekContainer = styled.div`
background-color: #f2f2f2;
padding: 10px;
margin-top: 10px;
`
export const WeekOne = styled.div`

`

export const WeekTwo = styled.div`
margin-top: 20px;
`

export const Title = styled.label`
font-size: 14px;
font-weight: 800;
`

export const WeekCard = styled.div`
display: flex;

`

export const Card = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
border: 1px solid  #716F6F;
padding: 0;
align-items: center;

`


export const UsageCardValue = styled.label`
color: white;
background-color: gray;
padding: 8px 20px 8px 20px;
margin-bottom: 0px;
`

export const UsageCardTitle = styled.label`
padding: 10px;
`
export const UsageAverageValue = styled.label`
color: white;
background-color: gray;
padding: 8px;
margin-bottom: 0px;
`

export const UsageAverageTitle = styled.label`
padding: 10px;
`

export const UsageCardValu = styled.label`
color: white;
background-color: #053E5E;
padding: 8px 20px 8px 20px;
margin-bottom: 0px;
border-radius: 5px;
`
export const UsageAverageValu = styled.label`
color: white;
background-color: #053E5E;
padding: 8px;
margin-bottom: 0px;
border-radius: 5px;
`

export const OrderContainer = styled.div`
background-color: #f2f2f2;
padding:5px;
`

export const OrderHead = styled.label`
font-weight: 600;
`

export const OrderTable = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top:5px;
margin-bottom:10px;

`

export const OrderDetail = styled.div`
flex-basis:100%;
display:flex;
flex-direction: column;
align-items: center;
margin-right: 5px;
border: 1px solid #716F6F;
border-radius: 5px;
justify-content: center;
flex-wrap:wrap;

padding:2px;


`

export const OrderLabel = styled.label`
font-size:11px;
padding-top:5px;
font-weight:600;
`

export const OrderValue = styled.label`
padding-top:5px;
display:flex;
align-items: center;
justify-content: center;
background-color: #dadada;
width:100%;
margin-bottom: 0px;
border-radius: 5px;
padding:5px;
font-size:12px;



`
export const OrderStatusContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;


`

export const OrderStatus = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: center;

`


export const OrderStatusLabel = styled.label`
font-size:14px;
font-weight:600;
`

export const OrderStatusValue = styled.label`
font-weight:600;
color: red;
font-size:12px;
padding:2px;
margin-left:10px;
`


export const OrderStatusDate = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: center;
`


export const OrderStatusLabelDate = styled.label`
font-size:14px;
font-weight:600;
`

export const OrderStatusValueDate = styled.label`
font-weight:600;
color: blue;
font-size:12px;
margin-left:10px;
`

export const OrderAccept = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:10px;
`

export const Button = styled.button`
border: 2px solid #DC1D13;
outline: none;
padding-left:15px;
padding-right:15px;
padding-top:-22px 
padding-bottom:-2px;
border-radius:5px;
background-color:white;
color:#DC1D13;
margin-left:10px;

&:hover{
       color :white;
background-color:#DC1D13;
}
`

export const Loading = styled.div`
display:flex;
align-items:center;
justify-content:center;
transform:translate(150px, 100px);
`


export const DealMgtReasonContainer = styled.div`
 display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const DealMgtautoCompleteContainer = styled.div`
margin-bottom:10px;
margin-left:15px;
flex:2;  
`

export const DealMgtButtonContainer = styled.div`
flex:1;
`


export const RedButton = styled.button`
 cursor: pointer;
    background-color: white;
    border: 2px solid #d32f2f;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 2px;
    width:85px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #d32f2f;
    border-radius: 5px;
   
    margin-left:10px;
`


export const DealFormTitlepro = styled.label`
                       text-align: right;
                        display: flex;
                       margin-right:15px;
                        align-items:center;
                        font-size: 12px;
                        font-weight:550;
`