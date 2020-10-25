import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class DevInfo {
    id: string;
    github: string;
    avatarURL: string;
    name: string;
    email: string;
    city: string;
    graduation: string;
    techStack: string;

    public createForm(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
          id: this.id,
          github: this.github,
          avatarURL: this.avatarURL,
          name: [this.name, [Validators.required]],
          email: [this.email, [Validators.required, Validators.email]],
          city: [this.city, [Validators.required]],
          graduation: [this.graduation, [Validators.required]],
          techStack: [this.techStack, [Validators.required]]
        });
      }
}
