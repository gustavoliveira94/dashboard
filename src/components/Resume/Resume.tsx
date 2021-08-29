/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWealth, IwealthReducer } from 'store/ducks/wealth';
import { AppState } from 'models/AppState.interface';

import Card from 'atoms/Card';
import Button from 'atoms/Button';
import Description from 'atoms/Description';
import Paragraph from 'atoms/Paragraph';

import {
  Content,
  Total,
  Infos,
  ContentButton,
  HiddenTotal,
  HiddenInfos,
} from './styles';

const Resume: React.FC = () => {
  const [hidden, setHidden] = useState(true);

  const dispatch = useDispatch();
  const wealth = useSelector(
    (store: AppState) => store?.wealth as IwealthReducer,
  );

  useEffect(() => {
    dispatch(getWealth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(wealth?.wealth?.total);

  const gain = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(wealth?.wealth?.gain);

  return (
    <Card>
      <Content>
        <Paragraph fontSize="25px">Seu resumo</Paragraph>
        <img
          src={`/icons/${hidden ? 'eye.closed.svg' : 'eye.icon.svg'}`}
          alt="hidden"
          onClick={() => setHidden(!hidden)}
        />
        <Total>
          <Description>Valor investido</Description>
          {hidden ? (
            <HiddenTotal />
          ) : (
            <Paragraph fontSize="22px">{total}</Paragraph>
          )}
        </Total>
        <Infos>
          <div>
            <Description>Rentabilidade/mês</Description>
            {hidden ? (
              <HiddenInfos />
            ) : (
              <Paragraph fontSize="18px">{`${wealth?.wealth?.profitability}%`}</Paragraph>
            )}
          </div>
          <div>
            <Description>CDI</Description>
            {hidden ? (
              <HiddenInfos />
            ) : (
              <Paragraph fontSize="18px">{`${wealth?.wealth?.cdi}%`}</Paragraph>
            )}
          </div>
          <div>
            <Description>Ganho/mês</Description>
            {hidden ? (
              <HiddenInfos />
            ) : (
              <Paragraph fontSize="18px">{gain}</Paragraph>
            )}
          </div>
        </Infos>
        <ContentButton>
          <Button>Ver mais</Button>
        </ContentButton>
      </Content>
    </Card>
  );
};

export default Resume;
