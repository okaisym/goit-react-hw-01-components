import styled from '@emotion/styled'

export const List = styled.ul`
list-style: none;
display: flex;
margin: 5px;
padding: 0;
gap: 30px;
`

export const ProfileContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
flex-flow: column;
margin: 15px;
padding: 15px;
max-width: 350px;
`

export const PersonalData = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`

export const Name = styled.p`
font-size: 18px;
font-weight: 700;
font-family: Arial, sans-serif;
margin-bottom: 5px;
`

export const ProfileDetails = styled.p`
font-family: Arial, sans-serif;
color: gray;
margin: 5px;
font-size: 13px;
`

export const Image = styled.img`
width: 250px;
border-radius: 80%;
`

export const StatsSpans = styled.span`
font-family: Arial, sans-serif;
display: flex;
align-items: center;
font-size: 14px;
margin-bottom: 3px;
justify-content: center;
`

export const StatsNumber = styled.span`
font-family: Arial, sans-serif;
font-weight: 700;
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
`