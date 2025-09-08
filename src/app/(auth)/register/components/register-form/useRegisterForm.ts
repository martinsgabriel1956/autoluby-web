import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "./schema";
import type { RegisterData } from "./types";

export function useRegisterForm() {
	const form = useForm({
		resolver: zodResolver(registerSchema),
	});

	function handleRegisterUser(data: RegisterData) {
		console.log(data);
	}

	return {
		form,
		handleRegisterUser,
	};
}
