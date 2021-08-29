/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import { gql } from '@apollo/client';

import { apolloClient } from 'services/graphqlClient';

import { IwealthReducer } from 'store/ducks/wealth';

export const GET_WEALTH_ID = gql`
  query WealthID($id: Int!) {
    wealthSummary_by_pk(id: $id) {
      cdi
      gain
      total
      profitability
    }
  }
`;

export const getWealthID = async (
  id: number,
): Promise<IwealthReducer | undefined> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_WEALTH_ID,
      variables: { id },
    });

    return data?.wealthSummary_by_pk;
  } catch (e) {
    toast.error('Ocorreu um erro, atualize a página, por favor!');
  }
};
