/* eslint-disable consistent-return */
import { toast } from 'react-toastify';

import request from 'services/request';

import { Iuser } from 'models/User.interface';

export const login = async ({
  email,
  password,
}: Pick<Iuser, 'email' | 'password'>): Promise<Iuser | undefined> => {
  try {
    const user = await request({
      url: '/api/auth',
      method: 'POST',
      data: {
        email,
        password,
      },
    });

    localStorage.setItem('userId', user.id);

    return user;
  } catch (error) {
    toast.error('Usuário não encontrado, e-mail e/ou senha inválidos!');
  }
};
