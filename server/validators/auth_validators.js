const {z} = require("zod");

const loginSchema = z.object({
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "email must be at least of 3 characters."})
    .max(50, {message: "email must not be more than 50 characters."}),

    password: z
    .string({required_error: "Password is required"})
    .min(6, {message: "Password must be at least of 6 characters."})
    .max(50, {message: "Password must not be more than 50 characters."}),
})


//creating user schema

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least of 3 characters."})
    .max(50, {message: "Name must not be more than 50 characters."}),


    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10, {message: "phone must be at least of 10 characters."})
    .max(50, {message: "phone must not be more than 20 characters."}),

});

module.exports = {signupSchema, loginSchema};