/* eslint-disable consistent-return */
import { toast } from 'react-toastify';

import request from 'services/request';

import { Iuser } from 'models/User.interface';

export const getUser = async (id: number): Promise<Iuser | undefined> => {
  try {
    const user = await request({
      url: `/api/getUser/${id}`,
      method: 'GET',
    });

    return user;
  } catch (error) {
    toast.error('Usuário não encontrado!');
  }
};
