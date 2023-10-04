import {z} from 'zod'

export const registerSchema = z.object({
    username: z
    .string({
        required_error: 'Username is required'
    }),
    email: z
    .string({
        required_error: 'Email is required'
    })
    .email({
        message: 'Invalid Email'
    }),
    password: z
    .string({
        required_error: 'password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters long'
    }),
});

export const loginSchema = z.object({
    email: z
    .string({
        required_error: 'Email is required'
    })
    .email({
        message: 'Invalid Email'
    }),
    password: z
    .string({}).min(6, {
        message: 'Password must be at least 6 characters long'
    }),
});