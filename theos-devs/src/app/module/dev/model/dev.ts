import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormacaoAcademicaEnum } from '../../../shared/enum/formacao-academica.enum';
import { GitHubUser } from '../../../shared/model/git-hub/git-hub-user';
import { IbgeMunicipio } from '../../../shared/model/ibge/ibge-municipio';
import { IbgeUF } from '../../../shared/model/ibge/ibge-uf';

export class Dev {
  id: number;
  gitHubLogin: string;
  gitHubUser: GitHubUser;
  avatar: string;
  nome: string;
  email: string;
  estado: IbgeUF;
  cidade: IbgeMunicipio;
  formacaoAcademica: FormacaoAcademicaEnum;
  especialidades: Array<string>;

  public createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      id: this.id,
      gitHubLogin: this.gitHubLogin,
      gitHubUser: this.gitHubUser,
      avatar: this.avatar,
      nome: [this.nome, [Validators.required]],
      email: [this.email, [Validators.required, Validators.email]],
      estado: new FormControl({ value: '', disabled: true }, Validators.required),
      cidade: new FormControl({ value: '', disabled: true }, Validators.required),
      formacaoAcademica: new FormControl({ value: '', disabled: true }, Validators.required),
      especialidades: [this.especialidades, [Validators.required]]
    });
  }
}
