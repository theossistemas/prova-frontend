import { Validators } from '@angular/forms';

export const camposFormularioCadastroDesenvolvedor = formBuilder => {
    return formBuilder.group({
        id: [null],
        nome: [null, Validators.required],
        github: [null],
        avatar: [null],
        email: [null, [Validators.required, Validators.email]],
        cidade: [null, Validators.required],
        formacao: [null],
        tecnologia: [null, Validators.required],
    });
};
