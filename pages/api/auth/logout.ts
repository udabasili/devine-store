// ./pages/api/logout

import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
  } catch (e) {
    console.log(e)
    return res.status(500).end()
  }
  return res.status(200).json({ success: true })
}

export default handler