import type z from "zod/v4";
import type { loginSchema } from "./schema";

export type LoginData = z.infer<typeof loginSchema>;
