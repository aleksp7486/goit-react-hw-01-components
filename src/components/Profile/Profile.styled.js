import styled from 'styled-components';
import { theme } from 'theme';

export const ProfileCard = styled.div`
  width: 300px;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Description = styled.div`
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
  background-color: ${p => p.theme.colors.primary};
  color: rgb(58, 58, 58);
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 200px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l}; ;
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => theme.colors.white};
  text-align: center;
  li {
    width: calc(100% / 3);
    padding: ${p => p.theme.space[3]}px;
  }
  li:not(:last-child) {
    border-right: 1px solid #d7f7f9;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Quantity = styled.span`
  display: block;
`;
