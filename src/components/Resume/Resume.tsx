import Card from 'atoms/Card';
import Button from 'atoms/Button';
import Description from 'atoms/Description';
import Paragraph from 'atoms/Paragraph';

import { Content, Total, Infos, ContentButton } from './styles';

const Resume: React.FC = () => {
  return (
    <Card>
      <Content>
        <Paragraph fontSize="25px">Seu resumo</Paragraph>
        <Total>
          <Description>Valor investido</Description>
          <Paragraph fontSize="22px">R$ 3.200.876,00</Paragraph>
        </Total>
        <Infos>
          <div>
            <Description>Rentabilidade/mês</Description>
            <Paragraph fontSize="18px">2,767%</Paragraph>
          </div>
          <div>
            <Description>CDI</Description>
            <Paragraph fontSize="18px">3,45%</Paragraph>
          </div>
          <div>
            <Description>Ganho/mês</Description>
            <Paragraph fontSize="18px">R$ 1833,23</Paragraph>
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
