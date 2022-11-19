import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Description = styled.div`
  padding: 20px;
  text-align: center;
  background-color: rgb(215, 247, 249);
  color: rgb(58, 58, 58);
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 200px;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

export const Location = styled.p``;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: rgb(67, 123, 145);
  color: #fff;
  text-align: center;
  li {
    width: calc(100% / 3);
    padding: 10px;
  }
  li:not(:last-child) {
    border-right: 1px solid rgb(215, 247, 249);
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: block;
`;
