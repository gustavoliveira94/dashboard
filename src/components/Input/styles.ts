import styled from 'styled-components';

interface Iinput {
  ref?: any;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  img {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
`;

export const Content = styled.input<Iinput>`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  color: ${({ theme }) => theme.secundary};
  border: 1px solid ${({ theme }) => theme.secundary};
  padding: 0 20px;
`;