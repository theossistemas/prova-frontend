import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../services/developers.service';
import { Developers } from '../models/developers.model';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  developers: any;
  erro: any;

  constructor(private developersService: DevelopersService) {
    this.getDev();
  }

  ngOnInit(): void {
  }

  getDev(){
    this.developersService.getDevelopers().subscribe(
      ( data: Developers ) => {
        this.developers = data;
      },
      ( error: any ) => {
        this.erro = error;
      }
    );
  }

}
