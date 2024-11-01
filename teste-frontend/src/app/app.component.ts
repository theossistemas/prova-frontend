import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Dev {
  username: string;
  avatar: string;
  name: string;
  email: string;
  city: string;
  formation: string;
  technologies: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste-frontend';
  devs: Dev[] = [];
  editIndex: number | null = null;
  devForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.devForm = this.fb.group({
      username: ['', Validators.required],
      avatar: [''],
      name: ['Nome não disponível'],
      email: ['Email não disponível'],
      city: [''],
      formation: [''],
      technologies: [''],
    });
  }

  ngOnInit() {
    this.devs = [
      {
        username: 'joaodasilva',
        avatar: 'https://img.freepik.com/fotos-gratis/retrato-de-sorrindo-encantador-homem-jovem-em-cinzento-t-shirt-ficar-contra-planicie-fundo_23-2148213406.jpg?t=st=1729903368~exp=1729906968~hmac=4c2595b0a54e4e37b5cb373020834ef93eafd144a003f98a9c2a01495a83b859&w=740',
        name: 'João da Silva',
        email: 'joao@example.com',
        city: 'Maringá - PR',
        formation: 'Desenvolvedor Frontend',
        technologies: 'Angular, jQuery, Vue'
      },
      {
        username: 'mariadasilva',
        avatar: 'https://img.freepik.com/fotos-gratis/morena-menina-posar_23-2148108748.jpg?t=st=1729903486~exp=1729907086~hmac=bb1b7f9c173891bc4167bf04f9b9fea20a9233866f1e5074474dd5991596449c&w=740',
        name: 'Maria da Silva',
        email: 'maria@example.com',
        city: 'São Paulo - SP',
        formation: 'Desenvolvedora Backend',
        technologies: 'Java, Node.js'
      },
    ];
  }

  fetchGitHubData() {
    const username = this.devForm.get('username')?.value;

    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
          this.devForm.patchValue({
            avatar: data.avatar_url,
            name: data.name || 'Nome não disponível',
            email: data.email || 'Email não disponível',
            city: data.location || '',
            formation: '',
            technologies: ''
          });
        });
    }
  }

  addOrUpdateDev() {
    if (this.devForm.valid) {
      if (this.editIndex !== null) {
        this.devs[this.editIndex] = { ...this.devForm.value, username: this.devs[this.editIndex].username };
      } else {
        this.devs.push(this.devForm.value);
      }
      this.devForm.reset();
      this.editIndex = null;
    }
  }

  deleteDev(index: number) {
    this.devs.splice(index, 1);
  }

  editDev(index: number) {
    this.editIndex = index;
    this.devForm.patchValue(this.devs[index]);
  }

  openGitHub(username: string) {
    window.open(`https://github.com/${username}`, '_blank');
  }
}