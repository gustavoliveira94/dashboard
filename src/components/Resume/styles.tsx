import styled from 'styled-components';

export const Content = styled.div`
  width: 345px;
  height: 350px;
  padding: 25px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  margin: 35px 0;
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5px solid #00000029;
  padding-bottom: 15px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

export const ContentButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
