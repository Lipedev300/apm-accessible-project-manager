import z from "zod";

export const createProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date()
});

export type CreateProjectSchema = z.infer<typeof createProjectSchema>