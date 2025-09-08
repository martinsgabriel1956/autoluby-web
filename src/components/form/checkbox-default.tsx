import type { ComponentProps } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface CheckboxProps<T extends FieldValues>
	extends Omit<ComponentProps<typeof Checkbox>, "checked" | "onCheckedChange"> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	className?: string;
	isHidden?: string;
	onChangeValue?: (value: boolean) => void;
	classLabel?: string;
	variant?: "default" | "outline";
}

export const CheckboxDefault = <T extends FieldValues>({
	control,
	name,
	label,
	className,
	isHidden = "",
	onChangeValue,
	classLabel,
	variant,
	...props
}: CheckboxProps<T>) => {
	const isReadOnly = props.disabled;

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				return (
					<FormItem
						className={cn(
							`${isHidden} flex flex-row items-center gap-2 space-y-0`,
							className,
						)}
					>
						<FormControl>
							<Checkbox
								{...props}
								checked={field.value || false}
								onCheckedChange={(checked) => {
									const newValue = checked === true;
									field.onChange(newValue);
									if (onChangeValue) onChangeValue(newValue);
								}}
								{...(isReadOnly && { disabled: true })}
							/>
						</FormControl>
						{label && (
							<FormLabel
								className={cn("text-sm font-normal cursor-pointer", classLabel)}
							>
								{label}
							</FormLabel>
						)}
						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
};
