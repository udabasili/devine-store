// ./pages/api/logout

import initAuth from "@/utils/initAuth"
import { NextApiRequest, NextApiResponse } from "next"
import { unsetAuthCookies } from "next-firebase-auth"

initAuth()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await unsetAuthCookies(req, res)
  } catch (e) {
    console.log(e)
    return res.status(500).end()
  }
  return res.status(200).json({ success: true })
}

export default handler