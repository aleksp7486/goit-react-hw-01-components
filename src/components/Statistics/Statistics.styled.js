import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  max-width: 300px;
  text-align: center;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Title = styled.h2`
  padding: 10px;
  font-size: 1.4rem;
  text-transform: uppercase;
  line-height: 1.8;
  color: rgb(66, 65, 63);
  background-color: rgb(251, 227, 195);
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
`;

export const Item = styled.li`
  flex-basis: 33.333%;
  flex-grow: 1;
  padding: 5px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 6px;
`;

export const Percentage = styled.span`
  display: block;
`;
