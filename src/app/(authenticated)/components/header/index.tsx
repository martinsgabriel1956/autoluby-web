import { Logo } from "@/components/logo";
import { SearchInput } from "@/components/ui/search-input";
import { LogoutButton } from "./components/logout-button";

export function Header() {
	return (
		<header className="flex items-center w-full justify-between px-36 shadow-[0px_2px_25px_0px_rgba(169,169,169,0.2)] py-8">
			<div className="lg:flex items-center gap-5 hidden">
				<Logo />
			</div>
			<div className=" max-w-lg w-full">
				<SearchInput />
			</div>

			<LogoutButton />
		</header>
	);
}
