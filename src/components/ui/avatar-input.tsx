"use client";

import { CircleUserRoundIcon, XIcon } from "lucide-react";
import Image from "next/image";
import {
	type Control,
	Controller,
	type ControllerRenderProps,
} from "react-hook-form";
import type { RegisterData } from "@/app/(auth)/register/components/register-form/types";
import { Button } from "@/components/ui/button";
import { useFileUpload } from "@/hooks/use-file-upload";

type AvatarFileProps = {
	field: ControllerRenderProps<RegisterData>;
};

function AvatarFile({ field }: AvatarFileProps) {
	const [
		{ files, isDragging },
		{
			removeFile,
			openFileDialog,
			getInputProps,
			handleDragEnter,
			handleDragLeave,
			handleDragOver,
			handleDrop,
		},
	] = useFileUpload({
		accept: "image/*",
		onFilesChange: (newFiles) => {
			// Quando um arquivo é adicionado/removido, atualiza o valor do formulário
			const file = newFiles[0]?.file || null;
			field.onChange(file);
		},
	});

	const previewUrl = files[0]?.preview || null;

	return (
		<div className="flex flex-col items-center gap-2">
			<div className="relative inline-flex">
				{/* Drop area */}
				<Button
					className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors outline-none focus-visible:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none"
					onClick={openFileDialog}
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					onDragOver={handleDragOver}
					onDrop={handleDrop}
					data-dragging={isDragging || undefined}
					aria-label={previewUrl ? "Change image" : "Upload image"}
					type="button"
				>
					{previewUrl ? (
						<Image
							className="size-full object-cover"
							src={previewUrl}
							alt={files[0]?.file?.name || "Uploaded image"}
							width={64}
							height={64}
							style={{ objectFit: "cover" }}
						/>
					) : (
						<div aria-hidden="true">
							<CircleUserRoundIcon className="size-4 opacity-60" />
						</div>
					)}
				</Button>
				{previewUrl && (
					<Button
						onClick={() => removeFile(files[0]?.id)}
						size="icon"
						className="border-background focus-visible:border-background absolute -top-1 -right-1 size-6 rounded-full border-2 shadow-none"
						aria-label="Remove image"
					>
						<XIcon className="size-3.5" />
					</Button>
				)}
				<input
					{...getInputProps()}
					className="sr-only"
					aria-label="Upload image file"
					tabIndex={-1}
				/>
			</div>
		</div>
	);
}

type AvatarInputProps = {
	control: Control<RegisterData>;
	name: "avatar";
};

export function AvatarInput({ control, name }: AvatarInputProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) =>
				AvatarFile({
					field,
				})
			}
		></Controller>
	);
}
