import styled from '@emotion/styled';

const getBgColorByStatus = props => (props.status ? 'green' : 'red');

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  border-radius: 4px;
`;

export const Status = styled.span`
  display: block;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  background-color: ${getBgColorByStatus};
  border: 4px solid #24d8de;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 1.6rem;
`;
