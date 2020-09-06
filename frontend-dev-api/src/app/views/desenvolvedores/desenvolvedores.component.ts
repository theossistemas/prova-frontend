import { Router } from '@angular/router';
import { DesenvolvedorService } from './../../components/desenvolvedor/desenvolvedor.service';
import { Desenvolvedor } from './../../components/desenvolvedor/desenvolvedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})
export class DesenvolvedoresComponent implements OnInit {
  
  desenvolvedores: Desenvolvedor[]

  constructor(private desenvolvedorService: DesenvolvedorService, private router: Router) { }

  ngOnInit(): void {
    this.desenvolvedorService.read().subscribe(desenvolvedores => {
      this.desenvolvedores = desenvolvedores
    })
  }
  
  editDesenvolvedor(): void {
    this.desenvolvedorService.showMessage('Feature em desenvolvimento...')
  }
  
  deleteDesenvolvedor(_id: string): void {
    this.desenvolvedorService.delete(_id).subscribe(() => {
      this.desenvolvedorService.showMessage('Desenvolvedor deletado com sucesso!')
      location.reload()
    })
  }
}
