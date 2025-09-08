import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "./schema";
import type { LoginData } from "./types";

export function useLoginForm() {
	const form = useForm({
		resolver: zodResolver(loginSchema),
	});

	function handleLoginUser(data: LoginData) {
		console.log(data);
	}

	return {
		form,
		handleLoginUser,
	};
}
