import { WelcomeMessageProps } from "./types";

export function WelcomeMessage({ title = "Bem-vindo à AutoLuby", subtitle }: WelcomeMessageProps) {
	return (
		<div className="">
			<h1 className="font-semibold text-4xl">{title}</h1>
			<span>{subtitle}</span>
		</div>
	);
}
