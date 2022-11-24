import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-transform: capitalize;
  thead {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
  tbody {
    background-color: ${p => p.theme.colors.primary};
  }
  th,
  td {
    padding: ${p => p.theme.space[3]}px;
  }
`;
