import { WelcomeMessage } from "../components/welcome-message";
import { RegisterForm } from "./components/register-form";

export default function RegisterPage() {
	return (
		<div className="max-w-[425px] w-full mx-auto">
			<div className="w-full pb-10 pt-16">
				<WelcomeMessage subtitle="Faça o cadastro da sua conta." />
			</div>
			<RegisterForm />
		</div>
	);
}
