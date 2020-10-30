import { NextApiRequest, NextApiResponse } from 'next';
import sass from 'sass';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { scss } = req.body;
  const result = sass.renderSync({ data: scss });
  const css = result.css.toString();
  res.status(200).json({ css });
}
