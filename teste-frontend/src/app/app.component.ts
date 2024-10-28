import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-frontend';
  devs: Dev[] = [
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
      city: 'Maringá - PR',
      formation: 'Desenvolvedora Frontend',
      technologies: 'React, React Native, Vue'
    }
  ];
  editIndex: number | null = null;

  fetchGitHubData() {
    const usernameInput = document.getElementById("github-username") as HTMLInputElement;
    const avatarInput = document.getElementById("avatar") as HTMLInputElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const cityInput = document.getElementById("city") as HTMLInputElement;
    const formationInput = document.getElementById("formation") as HTMLInputElement;
    const technologiesInput = document.getElementById("technologies") as HTMLTextAreaElement;

    const username = usernameInput.value;

    if (!username) {
      alert("Por favor, insira um usuário GitHub");
      return;
    }

    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Usuário não encontrado");
        }
        return response.json();
      })
      .then(data => {
        avatarInput.value = data.avatar_url || "";
        nameInput.value = data.name || "Nome não disponível";
        emailInput.value = data.email || "Email não disponível";
      })
      .catch(error => {
        console.error("Erro ao buscar dados do GitHub:", error);
        alert("Erro ao buscar dados do GitHub. Verifique o nome de usuário e tente novamente.");
      });
  }

  addOrUpdateDev() {
    const usernameInput = document.getElementById("github-username") as HTMLInputElement;
    const avatarInput = document.getElementById("avatar") as HTMLInputElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const cityInput = document.getElementById("city") as HTMLInputElement;
    const formationInput = document.getElementById("formation") as HTMLInputElement;
    const technologiesInput = document.getElementById("technologies") as HTMLTextAreaElement;

    const newDev: Dev = {
      username: usernameInput.value,
      avatar: avatarInput.value,
      name: nameInput.value,
      email: emailInput.value,
      city: cityInput.value,
      formation: formationInput.value,
      technologies: technologiesInput.value,
    };

    if (!newDev.username || !newDev.avatar || !newDev.name || !newDev.email || !newDev.city || !newDev.formation || !newDev.technologies) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (this.editIndex !== null) {
      this.devs[this.editIndex] = newDev;
      this.editIndex = null;
    } else {
      this.devs.push(newDev);
    }

    this.clearForm();
  }

  editDev(index: number) {
    const dev = this.devs[index];
    const usernameInput = document.getElementById("github-username") as HTMLInputElement;
    const avatarInput = document.getElementById("avatar") as HTMLInputElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const cityInput = document.getElementById("city") as HTMLInputElement;
    const formationInput = document.getElementById("formation") as HTMLInputElement;
    const technologiesInput = document.getElementById("technologies") as HTMLTextAreaElement;

    usernameInput.value = dev.username;
    avatarInput.value = dev.avatar;
    nameInput.value = dev.name;
    emailInput.value = dev.email;
    cityInput.value = dev.city;
    formationInput.value = dev.formation;
    technologiesInput.value = dev.technologies;

    this.editIndex = index;
  }

  deleteDev(index: number) {
    this.devs.splice(index, 1);
  }

  clearForm() {
    const usernameInput = document.getElementById("github-username") as HTMLInputElement;
    const avatarInput = document.getElementById("avatar") as HTMLInputElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const cityInput = document.getElementById("city") as HTMLInputElement;
    const formationInput = document.getElementById("formation") as HTMLInputElement;
    const technologiesInput = document.getElementById("technologies") as HTMLTextAreaElement;

    usernameInput.value = "";
    avatarInput.value = "";
    nameInput.value = "";
    emailInput.value = "";
    cityInput.value = "";
    formationInput.value = "";
    technologiesInput.value = "";
  }

  openGitHub(username: string) {
    const url = `https://github.com/${username}`;
    window.open(url, '_blank');
  }
}
