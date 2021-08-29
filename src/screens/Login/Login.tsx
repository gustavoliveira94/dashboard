/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { setLogin } from 'store/ducks/auth';

import { useForm } from 'hooks/useForm';

import { emailValidation } from 'utils/validations';

import Input from 'components/Input';
import Paragraph from 'atoms/Paragraph';

import { AppState } from 'models/AppState.interface';

import { Form, Button } from './styles';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((store: AppState) => store?.auth);

  const router = useRouter();

  const { getInput, validateForm, getValues } = useForm();

  useEffect(() => {
    if (user?.isLogged) {
      router.push('/');
    }
  }, [user, router]);

  const validateEmail =
    getValues?.email && !emailValidation.test(email)
      ? 'Por favor, digite um e-mail válido'
      : '';

  const validatePassword =
    getValues?.password && password?.length < 6
      ? 'A senha deve conter np mínimo 6 caracteres!'
      : '';

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const hasError = validateForm();

        if (hasError) {
          return;
        }

        dispatch(
          setLogin({
            email: getValues.email,
            password: getValues.password,
          }),
        );
      }}
      noValidate
    >
      <Paragraph fontSize="4em">Olá!</Paragraph>
      <Paragraph fontSize="1.8em">Seja bem-vindo(a)</Paragraph>
      <Input
        ref={(ref: React.InputHTMLAttributes<HTMLInputElement>) =>
          getInput(ref)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        value={email}
        name="email"
        placeholder="E-mail"
        required
        error={validateEmail}
      />
      <Input
        ref={(ref: React.InputHTMLAttributes<HTMLInputElement>) =>
          getInput(ref)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        value={password}
        name="password"
        type="password"
        placeholder="Senha"
        required
        error={validatePassword}
      />
      <Button>Entrar</Button>
    </Form>
  );
};

export default Login;
