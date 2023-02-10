import { redis } from "@/lib/upstash";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await redis.set("key", "value");
  res.status(200).json({ response });
}
