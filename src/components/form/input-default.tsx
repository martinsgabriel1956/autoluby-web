import type { InputHTMLAttributes } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	className?: string;
	formatValue?: (value: any) => string;
	isHidden?: string;
	onChangeValue?: (value: any) => void;
	classLabel?: string;
	variant?: "default" | "outline";
}

export const InputDefault = <T extends FieldValues>({
	control,
	name,
	label,
	className,
	formatValue,
	isHidden = "",
	onChangeValue,
	classLabel,
	variant,
	...props
}: InputProps<T>) => {
	const isReadOnly = props.readOnly;

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				const formattedValue = formatValue
					? formatValue(field.value)
					: field.value;

				return (
					<FormItem className={cn(`${isHidden} space-y-0 w-full`, className)}>
						<FormLabel className={cn(classLabel)}>{label}</FormLabel>
						<FormControl>
							<Input
								{...field}
								{...props}
								ref={field.ref}
								className="m-0"
								// variant={variant}
								{...(isReadOnly
									? {
											readOnly: true,
											defaultValue: formattedValue,
										}
									: {
											value: formattedValue,
											onChange: (e) => {
												const newValue = e.target.value;
												field.onChange(newValue);
												if (onChangeValue) onChangeValue(newValue);
											},
										})}
							/>
						</FormControl>

						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
};
