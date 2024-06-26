import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres" })
    .transform((name) =>
      name
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" "),
    ),
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }),
});
