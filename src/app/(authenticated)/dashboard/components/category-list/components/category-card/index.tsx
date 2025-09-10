import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { CategoryProps } from "./types";

export function CategoryCard({
	description,
	imageSrc,
	title,
	total,
}: CategoryProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>

				<div className="">
					<span className="">{total} Veículos</span>
				</div>
			</CardHeader>
			<CardContent>
				<Image src={imageSrc} alt="" width={50} height={50} />
			</CardContent>
		</Card>
	);
}
