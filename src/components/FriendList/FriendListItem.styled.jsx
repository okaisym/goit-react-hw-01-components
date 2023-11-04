import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const IsOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props =>
    props.$status ? props.theme.colors.verde : props.theme.colors.red};
    margin: 10px;
`;

export const FriendName = styled.p`
font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.81px;
`;