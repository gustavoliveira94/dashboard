import { Container } from './styles';

interface ButtonProps {
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, fullWidth }) => {
  return (
    <Container fullWidth={fullWidth} data-testid="button">
      {children}
    </Container>
  );
};

export default Button;
