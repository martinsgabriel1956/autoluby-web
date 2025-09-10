import Image from "next/image";

import Icon from "../../../public/favicon.svg";

export function Logo() {
	return (
		<>
			<Image alt="Icon AutoLuby" src={Icon} className="w-9" />
			<h1 className="text-red-500 font-semibold text-4xl leading-[206.99999999999997%]">
				AutoLuby
			</h1>
		</>
	);
}
