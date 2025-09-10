import Link from "next/link";
import { WelcomeMessage } from "../components/welcome-message";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
	return (
		<section className="max-w-[425px] w-full mx-auto">
			<div className="pb-10 pt-16">
				<WelcomeMessage subtitle="Faça o login para acessar sua conta." />
			</div>
			<LoginForm />

			<span className="pt-6 inline-flex items-center gap-1">
				Ainda não possui conta?
				<Link href="/register" className="text-primary hover:underline">
					Criar Conta{" "}
				</Link>
			</span>
		</section>
	);
}
