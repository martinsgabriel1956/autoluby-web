"use client";

import { InputDefault } from "@/components/form/input-default";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { documentValidator } from "@/utils/document-validator";
import { useRegisterForm } from "./useRegisterForm";

export function RegisterForm() {
	const { form, handleRegisterUser } = useRegisterForm();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleRegisterUser)}
				className="w-full space-y-4"
			>
				<InputDefault
					control={form.control}
					name="name"
					placeholder="Digite o seu nome"
					label="Nome:"
				/>

				<InputDefault
					control={form.control}
					name="email"
					placeholder="Digite o seu email"
					type="email"
					label="E-mail:"
				/>
				<InputDefault
					control={form.control}
					name="cpf"
					placeholder="Digite o seu CPF"
					formatValue={(value: string) => documentValidator(value, "CPF")}
					label="CPF:"
				/>

				<InputDefault
					control={form.control}
					name="password"
					placeholder="Digite a sua senha"
					type="password"
					label="Senha:"
				/>
				<InputDefault
					control={form.control}
					name="confirmPassword"
					placeholder="Digite a sua senha"
					type="password"
					label="Confirmação de senha:"
				/>

				<div className="w-full">
					<Button type="submit" className="w-full">
						Cadastrar
					</Button>
				</div>
			</form>
		</Form>
	);
}
