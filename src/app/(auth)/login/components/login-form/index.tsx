"use client";

import Link from "next/link";
import { CheckboxDefault } from "@/components/form/checkbox-default";
import { InputDefault } from "@/components/form/input-default";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useLoginForm } from "./useLoginForm";

export function LoginForm() {
	const { form, handleLoginUser } = useLoginForm();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleLoginUser)} className="space-y-8">
				<InputDefault
					control={form.control}
					name="email"
					label="Email"
					placeholder="Digite o seu email"
					type="email"
				/>

				<InputDefault
					control={form.control}
					name="password"
					label="Senha"
					placeholder="Digite a sua senha"
					type="password"
				/>

				<div className="flex items-center justify-between">
					<CheckboxDefault
						control={form.control}
						name="rememberMe"
						label="Lembrar minha senha"
						classLabel="text-red-500 font-normal"
					/>

					<Link
						href="/forgot-password"
						className="text-red-500 font-normal text-sm"
					>
						Esqueceu a senha?
					</Link>
				</div>

				<div className="w-full">
					<Button variant="default" type="submit" className="w-full">
						Entrar
					</Button>
				</div>
			</form>
		</Form>
	);
}
