import styled from 'styled-components';

const getBgColorByStatus = p => (p.status ? 'green' : 'red');

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Status = styled.span`
  display: block;
  margin-right: ${p => p.theme.space[4]}px;
  width: 20px;
  height: 20px;
  background-color: ${getBgColorByStatus};
  border: 4px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
`;
