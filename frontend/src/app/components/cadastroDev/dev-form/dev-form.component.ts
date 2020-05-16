import { Dev } from './../dev.model';
import { CadastroDevService } from './../cadastro-dev.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dev-form',
  templateUrl: './dev-form.component.html',
  styleUrls: ['./dev-form.component.css'],
})
export class DevFormComponent implements OnInit {
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  @Input() dev: Dev;

  constructor(private devService: CadastroDevService) {}

  ngOnInit(): void {}

  saveDev(): void {
    if (this.dev.id == null) {
      this.createDev();
    } else {
      this.updateDev();
    } 
  }

  createDev(): void {
    this.devService.create(this.dev).subscribe(() => {
      this.devService.showMessage('Yeees! Dev cadastrado com sucesso.');
      this.clearFields(this.dev);
      this.refresh.emit();
    });
  }
  
  updateDev(): void {
    this.devService.update(this.dev).subscribe(() => {
      this.devService.showMessage('Dev editado com sucesso!');
      this.clearFields(this.dev);
      this.refresh.emit();
    });
  }

  clearFields(dev: Dev): void {
    this.dev.id = null;
    this.dev.gitHubURL = '';
    this.dev.avatarURL = '';
    this.dev.nome = '';
    this.dev.email = '';
    this.dev.cidade = '';
    this.dev.formacao = '';
    this.dev.tecnologias = '';
  }
}
