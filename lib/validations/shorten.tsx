import z from "zod";

export const shortenSchema = z.object({
  url: z.string().url({ message: "Given input is not a link!" }),
});

export type ShortenRequest = z.infer<typeof shortenSchema>;
