import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export class DevSearch {
  especialidade: string;
  formacaoAcademica: string;
  estado: string;
  cidade: string;

  public static createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      especialidade: '',
      formacaoAcademica: new FormControl({value: '', disabled: true}),
      estado: new FormControl({value: '', disabled: true}),
      cidade: new FormControl({value: '', disabled: true})
    });
  }
}
