import styled from 'styled-components';

interface IButton {
  fullWidth?: boolean;
}

export const Container = styled.button<IButton>`
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  height: 30px;
  border: 1px solid ${({ theme }) => theme.main};
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.main};
  cursor: pointer;
`;
