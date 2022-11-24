import styled from 'styled-components';

export const StatisticsCard = styled.section`
  max-width: 300px;
  text-align: center;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Title = styled.h2`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: ${p => p.theme.colors.white};
`;

export const Item = styled.li`
  flex-basis: 33.333%;
  flex-grow: 1;
  padding: ${p => p.theme.space[2]}px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Percentage = styled.span`
  display: block;
`;
