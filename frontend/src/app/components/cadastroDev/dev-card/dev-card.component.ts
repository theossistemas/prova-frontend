import { CadastroDevService } from './../cadastro-dev.service';
import { Dev } from './../dev.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.css'],
})
export class DevCardComponent implements OnInit {
  @Input() devInput: Dev;
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  changeText: boolean;
  dev: Dev;

  constructor(private devService: CadastroDevService) {
    this.changeText = false;
  }

  ngOnInit(): void {
    this.dev = this.devInput;
  }

  editarDev(devId: number): void {
    this.edit.emit(devId);
  }

  deletarDev(devId: number): void {
    this.devService.delete(devId).subscribe((dev) => {
      this.dev = dev;
      this.refresh.emit();
    });
  }
}
