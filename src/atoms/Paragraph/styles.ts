import styled from 'styled-components';

interface Iparagraph {
  fontSize: string;
}

export const Container = styled.p<Iparagraph>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.main};
  font-weight: bold;
`;
