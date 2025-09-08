import z from "zod/v4";
import { registerSchema } from "./schema";

export type RegisterData = z.infer<typeof registerSchema>