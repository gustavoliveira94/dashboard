import styled from 'styled-components';

import { InputProps } from './Input';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;

  img {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
`;

export const Content = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  color: ${({ theme }) => theme.secundary};
  border: 1px solid
    ${({ theme, error }) => (error ? '#ff4d4f' : theme.secundary)};
  padding: 0 20px;
`;

export const Error = styled.span`
  position: absolute;
  color: #ff4d4f;
  font-size: 16px;
  margin-top: 65px;
`;
