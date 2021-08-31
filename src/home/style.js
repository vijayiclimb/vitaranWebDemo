import styled from 'styled-components'

export const SidebarContainer=styled.div`
width: 100%;
`

export const SidebarMenu=styled.div`
margin-top: 20px;


`

export const SidebarItems=styled.div`
display: flex;
align-items: center;
cursor: pointer;




`
export const SidebarItem=styled.div`
display: flex;
padding: 10px;
margin-left:10px;
flex: 6;
cursor: pointer;

`

export const SidebarIcon=styled.div`
cursor: pointer;
`

export const SidebarTitle=styled.label`
margin-left: 20px;
font-family: 'proxima-nova', sans-serif;
cursor: pointer;
font-weight: 500;
`
export const SideIndicator=styled.div`
flex: 1;
`

export const SideIndicators=styled.div`
flex: 1;
display:flex;
flex-direction:row;
justify-content:flex-end;
`

export const SideList=styled.ul`
padding-left: 5px;
padding-right: 5px;

`

export const SideListItem=styled.li`
padding: 8px;
cursor: pointer;
display:flex;
flex-direction:row;
justify-content:space-between;

&:hover{
    background-color: #d31c12;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}


`

export const SideListLabel=styled.label`
padding-left: 40px;
font-size: 14px;
font-weight: 600;
cursor: pointer;


`