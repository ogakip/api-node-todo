import { object, string } from "yup"

export const createUserSchema = object().shape({
    email: string()
      .email("Formato de email inválido")
      .required("Email obrigatório")
      .max(158, "Comprimento deve ter no máximo 158 caracteres"),
    password: string()
    .required("Senha obrigatória")
    .matches(/[a-z]/, "Sua senha deve conter ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Sua senha deve conter ao menos uma letra maiúscula")
      .matches(/[0-9]/, "Sua senha deve conter ao menos um número")
      .matches(/\W/, "Sua senha deve conter ao menos um caractere especial")
      .matches(/^(?!.*\s).{0,}$/, "Sua senha não deve conter espaços")
}).noUnknown(true)

export const loginUserSchema = object().shape({
  email: string()
      .email("Formato de email inválido")
      .required("Email obrigatório"),
  password: string()
  .required("Senha obrigatória")
}).noUnknown(true)