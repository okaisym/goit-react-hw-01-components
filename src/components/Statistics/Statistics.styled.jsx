import styled from 'styled-components';

export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticTitle = styled.h2`
font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: ${p => p.theme.colors.black};
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-bottom: 50px;
  padding: 0px;
`;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${getRandomColor};
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
`;

export const StatisticText = styled.span`
font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.32px;
  color: ${p => p.theme.colors.beige};
`;