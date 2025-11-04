import {z} from 'zod';

export const signedInput = z.object({
  username: z.string().min(1,{message: "You do not have empty username"}),
  password: z.string().min(8).max(15)
})
console.log("Hi there");
export type SignedInputType = z.infer<typeof signedInput>;