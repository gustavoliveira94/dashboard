import { NextApiRequest, NextApiResponse } from 'next';

import db from 'services/db/db.json';

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const findUser = db.users.find((user) => user.id === +query?.id);

  if (!findUser) {
    return res.status(404).json({ error: 'User not exists!' });
  }

  return res.status(200).json(findUser);
};

export default getUser;
