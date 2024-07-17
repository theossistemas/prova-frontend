import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerText: string = 'Cadastro DEV';
  
  @Output() search = new EventEmitter<string>();

  getDev(event: any): void {
    const query = event.target.value;
    this.search.emit(query);
  }
}





