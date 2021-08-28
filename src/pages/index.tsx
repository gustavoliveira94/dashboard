import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';

import { GET_WEALTH_ID } from 'services/graphqlClient/queries/wealth';

import HomeScreen from 'screens/Home';

const Home: NextPage = () => {
  const { data } = useQuery(GET_WEALTH_ID, { variables: { id: 1 } });

  console.log(data);

  return <HomeScreen />;
};

export default Home;
