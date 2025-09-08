import Image from "next/image";

import Icon from "../../../../../public/favicon.svg";

export function Header() {
	return (
		<header className="flex items-center justify-center lg:justify-start">
			<div className="lg:flex items-center gap-5 hidden">
				<Image alt="Icon AutoLuby" src={Icon} className="w-9" />
				<h1 className="text-red-500 font-semibold text-4xl leading-[206.99999999999997%]">
					AutoLuby
				</h1>
			</div>

			<div className="shadow w-28 h-28 flex items-center justify-center rounded-[5px] lg:hidden">
				<Image alt="Icon AutoLuby" src={Icon} />
			</div>
		</header>
	);
}
