import { Schema, model } from 'mongoose'

const DevSchema = new Schema({
    login: { type: String, maxlength: 120, required: [true, 'Informe o identificador do GitHub.'], trim: true },
    name: { type: String, maxlength: 120, required: [true, 'Informe o nome do(a) dev.'], trim: true },
    bio: { type: String, maxlength: 120, required: [true, 'Informe a área de atuação'], trim: true },
    avatar_url: { type: String, maxlength: 120 },
    techs: { type: String, required: [true, 'Informe pelo menos uma tecnologia.'], trim: true },
    email: { type: String, required: [true, 'Informe o e-mail.'], lowercase: true, trim: true },
    city: { type: String, required: [true, 'Informe a cidade'], trim: true },
})

export const Dev = model('Dev', DevSchema)
