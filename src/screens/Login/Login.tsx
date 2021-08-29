import { login } from 'services/request/auth/login';

import { useForm } from 'hooks/useForm';

import Input from 'components/Input';
import Paragraph from 'atoms/Paragraph';

import { Form, Button } from './styles';

const Login: React.FC = () => {
  const { getInput, validateForm } = useForm();

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const hasError = validateForm();

        if (hasError) {
          return;
        }

        await login({
          email: 'gustavo@teste.com.br',
          password: '12345',
        });
      }}
      noValidate
    >
      <Paragraph fontSize="4em">Olá!</Paragraph>
      <Paragraph fontSize="1.8em">Seja bem-vindo(a)</Paragraph>
      <Input
        ref={(ref: React.InputHTMLAttributes<HTMLInputElement>) =>
          getInput(ref)
        }
        name="email"
        placeholder="E-mail"
        required
      />
      <Input
        ref={(ref: React.InputHTMLAttributes<HTMLInputElement>) =>
          getInput(ref)
        }
        name="password"
        type="password"
        placeholder="Senha"
        required
      />
      <Button>Entrar</Button>
    </Form>
  );
};

export default Login;
