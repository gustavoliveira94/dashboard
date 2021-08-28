import { Container } from './styles';

interface ParagraphProps {
  fontSize: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, fontSize }) => {
  return <Container fontSize={fontSize}>{children}</Container>;
};

export default Paragraph;
