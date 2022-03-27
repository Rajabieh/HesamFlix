import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("Det Funkar");
});

export default router;
