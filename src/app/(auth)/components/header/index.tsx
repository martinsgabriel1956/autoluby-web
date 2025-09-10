import Image from "next/image";
import { Logo } from "@/components/logo";
import Icon from "../../../../../public/favicon.svg";

export function Header() {
	return (
		<header className="flex items-center justify-center lg:justify-start">
			<div className="lg:flex items-center gap-5 hidden">
				<Logo />
			</div>

			<div className="shadow w-28 h-28 flex items-center justify-center rounded-[5px] lg:hidden">
				<Image alt="Icon AutoLuby" src={Icon} />
			</div>
		</header>
	);
}
