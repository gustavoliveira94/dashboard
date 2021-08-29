/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosRequestConfig } from 'axios';

const request = axios.create();

export default async (config: AxiosRequestConfig) => {
  const { data } = await request({
    ...config,
  });

  return data;
};
