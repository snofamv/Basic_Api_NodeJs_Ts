import { Router, Request, Response } from "express";

export const authRouter = Router();
/**
 * @openapi
 * /example:
 *   get:
 *     description: Retorna un mensaje de ejemplo con un parámetro opcional.
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required: false
 *         description: Nombre opcional para personalizar el mensaje.
 *     responses:
 *       200:
 *         description: Mensaje de ejemplo retornado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Hola, {name}!'
 */
authRouter.get("/login", (req: Request, res: Response) => {
  res.send("auth     endpoint");
});
// authRouter.post("/auth/signin");
