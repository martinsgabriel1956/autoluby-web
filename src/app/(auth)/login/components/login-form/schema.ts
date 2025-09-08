import z from "zod/v4";

export const loginSchema = z.object({
	email: z.email("Preencha o campo nome"),
	password: z.string("Preecha o campo senha").min(1, "asccdas"),
	rememberMe: z.boolean().default(false),
});
