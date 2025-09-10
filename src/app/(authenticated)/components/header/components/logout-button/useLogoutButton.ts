import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogoutButton() {
	const router = useRouter();

	async function handleLogoutUser() {
		try {
			const response = await fetch("/api/logout", {
				method: "POST",
			});

			if (!response.ok) {
				toast.error("Erro ao fazer logout");
			}

			toast.success("Até uma próxima!!");
			router.push("/login");
			router.refresh();
		} catch (error) {
			console.error("Erro ao fazer logout:", error);
			toast.error("Erro ao fazer logout");
		}
	}

	return { handleLogoutUser };
}
