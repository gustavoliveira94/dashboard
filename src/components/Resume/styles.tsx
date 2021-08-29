import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  width: 100%;
  width: 345px;
  height: 350px;
  padding: 25px;

  img {
    position: absolute;
    right: 25px;
    top: 30px;
    cursor: pointer;
  }

  @media screen and (max-width: 320px) {
    width: 290px;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 45px 0;
`;

export const HiddenTotal = styled.div`
  width: 100%;
  height: 30px;
  background-color: #e8ebf6;
`;

export const HiddenInfos = styled.div`
  width: 100px;
  height: 20px;
  background-color: #e8ebf6;
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

    div {
      width: 100px;
      margin: 0;
    }
  }
`;

export const ContentButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
