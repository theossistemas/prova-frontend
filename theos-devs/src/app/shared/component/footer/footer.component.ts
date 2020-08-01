import { Component } from '@angular/core';
import { faAngular, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public faAngular: IconDefinition = faAngular;

  public year: string = new Date().getFullYear().toString();

  constructor() {}
}
