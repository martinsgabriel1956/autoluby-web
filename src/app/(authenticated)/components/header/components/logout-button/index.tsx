"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogoutButton } from "./useLogoutButton";

export function LogoutButton() {
	const { handleLogoutUser } = useLogoutButton();

	return (
		<Button variant="default" onClick={handleLogoutUser}>
			Sair
			<LogOut />
		</Button>
	);
}
