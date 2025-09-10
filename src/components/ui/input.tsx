import { CircleCheck, CircleX } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<div className="relative">
			<input
				type={type}
				data-slot="input"
				className={cn(
					"file:text-foreground placeholder:text-muted-foreground placeholder:font-semibold selection:bg-primary bg-input selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-[3px] border-2 px-4 py-2.5  shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-sm border-border",
					"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
					"aria-invalid:ring-amber-500/20 dark:aria-invalid:ring-amber-500/40 aria-invalid:border-amber-500 aria-invalid:placeholder:text-amber-500",
					{
						"border-green-500 ring-green-500/20 dark:ring-green-500/40 text-green-500":
							props["aria-invalid"] === false &&
							props.value !== undefined &&
							props.value !== "",
					},
					className,
				)}
				{...props}
			/>

			<CircleX
				className={cn("hidden text-amber-500 size-4 absolute top-2.5 right-4", {
					block: props["aria-invalid"] === true,
				})}
			/>

			<CircleCheck
				className={cn("hidden text-green-500 size-4 absolute top-2.5 right-4", {
					block:
						props["aria-invalid"] === false &&
						props.value !== undefined &&
						props.value !== "",
				})}
			/>
		</div>
	);
}

export { Input };
