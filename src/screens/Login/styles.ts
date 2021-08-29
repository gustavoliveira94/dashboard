import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  padding: 0 15px;

  div:first-of-type {
    margin-top: 30px;
  }

  div {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  background: linear-gradient(
      270deg,
      rgb(223, 53, 101) -80%,
      rgb(251, 149, 86) 100%
    )
    0% 0% no-repeat padding-box padding-box transparent;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
