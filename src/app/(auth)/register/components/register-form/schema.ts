import z from "zod/v4";
import { isValidCPF } from "@/utils/valid-cpf";

export const registerSchema = z.object({
	name: z.string("Preencha o campo nome").max(100),
	email: z.email("Preencha o campo nome"),
	cpf: z
		.string("Preencha o campo CPF")
		.refine(
			(cpf) => {
				const cleanCPF = cpf.replace(/\D/g, "");
				return cleanCPF.length === 11;
			},
			{
				message: "CPF deve conter 11 dígitos",
			},
		)
		.refine((cpf) => isValidCPF(cpf), {
			message: "CPF inválido - verifique os dígitos verificadores",
		})
		// Transforma o CPF removendo caracteres especiais
		.transform((cpf) => cpf.replace(/\D/g, "")),
	avatar: z.file().optional(),
	bio: z.string().optional(),
	password: z.string("Preecha o campo senha"),
	confirmPassword: z.string("Preecha o campo de confirmação de senha"),
});
