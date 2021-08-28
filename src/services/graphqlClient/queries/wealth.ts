import { gql } from '@apollo/client';

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
