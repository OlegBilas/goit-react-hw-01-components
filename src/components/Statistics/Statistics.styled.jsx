import styled from 'styled-components';

export const Statistic = styled.section`
  width: 300px;
  margin: 20px auto;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  /* gap: 20px; */
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #c4ced8;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 4);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
`;
