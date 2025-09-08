import type { TextareaHTMLAttributes } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextareaProps<T extends FieldValues>
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	className?: string;
	formatValue?: (value: any) => string;
	isHidden?: string;
	onChangeValue?: (value: any) => void;
	classLabel?: string;
}

export const TextareaDefault = <T extends FieldValues>({
	control,
	name,
	label,
	className,
	formatValue,
	isHidden = "",
	onChangeValue,
	classLabel,
	...props
}: TextareaProps<T>) => {
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
					<FormItem className={cn(`${isHidden} space-y-0`, className)}>
						<FormLabel className={cn(classLabel)}>{label}</FormLabel>
						<FormControl>
							<Textarea
								{...field}
								{...props}
								ref={field.ref}
								className="m-0 h-36 resize-none"
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
