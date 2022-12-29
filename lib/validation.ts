import { object, ref, string } from "yup";

export const userInfoSchema = object({
  firstname: string().min(2).max(20).required(),
  lastname: string().min(2).max(20),
  phone: string().min(11).required(),
  password: string().min(8).required(),
  confirmPassword: string().required('Password confirmation is required').oneOf([ref('password')], 'Confirmation password does not match')
}).required();

export const userSchema = object({
  phone: string().min(11).required(),
  password: string().min(8).required(),
}).required();

export const passwordSchema = object({
  password: string().min(8).required(),
});

export type User = {
  phone: string;
  password: string;
  [key: string]: any;
};

export type UserInfo = User & {
  firstname: string;
  lastname: string;
  verified: boolean;
}