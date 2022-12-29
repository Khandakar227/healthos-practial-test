// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // For JSON Web Token
  const SECRET_KEY = process.env.SECRET_KEY as string;
  const { firstname, lastname, phone, password, confirmPassword } = req.body;
  // Hash the password
  // Check f user exist in DB if so, send a 409 error response
  // Save the credentials in a database
  
  console.log(firstname, lastname, password, confirmPassword);
    const token = jwt.sign({firstname, lastname, phone}, SECRET_KEY, {expiresIn: "3h"})
    res.status(200).json({message: "Success", token})
  }
  