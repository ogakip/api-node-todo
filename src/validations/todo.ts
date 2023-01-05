import { object, string, bool } from "yup"

export const createTaskSchema = object().shape({
    title: string()
      .required("Título obrigatório")
      .max(50, "Comprimento deve ter no máximo 50 caracteres"),
    description: string()
    .max(1000, "Comprimento deve ter no máximo 1000 caracteres")
}).noUnknown(true)

export const updateTaskSchema = object().shape({
  title: string()
    .max(50, "Comprimento deve ter no máximo 50 caracteres"),
  description: string()
  .max(1000, "Comprimento deve ter no máximo 1000 caracteres"),
  its_complete: bool()
}).noUnknown(true)