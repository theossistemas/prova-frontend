export interface IDesenvolvedor {
    id?: number;
    nome?: string;
    github?: string;
    avatar?: string;
    email?: string;
    cidade?: string;
    formacao?: string;
    tecnologia?: string;
}

export class Desenvolvedor implements IDesenvolvedor {
    constructor(
        public id?: number,
        public nome?: string,
        public github?: string,
        public avatar?: string,
        public email?: string,
        public cidade?: string,
        public formacao?: string,
        public tecnologia?: string,
    ) {
    }
}
