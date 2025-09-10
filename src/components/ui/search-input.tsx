import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "./button";
// import { Label } from "@/components/ui/label";

export function SearchInput() {
	const id = useId();
	return (
		<div className="*:not-first:mt-2 w-full">
			{/* <Label htmlFor={id} aria-readonly>
				Search input with icon and button
			</Label> */}
			<div className="relative w-full">
				<Input id={id} className="w-full " type="search" />
				<Button
					className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					aria-label="Submit search"
					type="submit"
					variant="link"
				>
					<SearchIcon size={16} aria-hidden="true" />
				</Button>
			</div>
		</div>
	);
}
