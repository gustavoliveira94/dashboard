import { NextApiRequest, NextApiResponse } from 'next';

import db from 'services/db/db.json';

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { email, password } = body;

  const findUser = db.users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!findUser) {
    return res.status(404).json({ error: 'User not exists!' });
  }

  return res.status(200).json(findUser);
};

export default auth;
