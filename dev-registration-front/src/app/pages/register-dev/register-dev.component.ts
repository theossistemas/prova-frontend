import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ServicesService } from '../../services/services.service';
import { ShowNotificationComponent } from 'src/app/components/show-notification/show-notification.component';

interface GitHubUser {
  login: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-register-dev',
  templateUrl: './register-dev.component.html',
  styleUrls: ['./register-dev.component.css']
})

export class RegisterDevComponent implements OnInit {
  devForm!: FormGroup;
  suggestions: GitHubUser[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private _services: ServicesService, private showNotification : ShowNotificationComponent) { }

  ngOnInit() {
    this.devForm = this.fb.group({
      githubUsername: new FormControl({ value: '', disabled: true }),
      avatarUrl: new FormControl({ value: '', disabled: true }),
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      location: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      technologies: new FormControl('', Validators.required),
      htmlUrl : new FormControl('')
    });
  }

  onGithubUsernameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const username = input.value;
    if (username.length < 2) {
      this.suggestions = [];
      return;
    }
    this.fetchGitHubSuggestions(username).subscribe(suggestions => {
      this.suggestions = suggestions;
    });
  }

  fetchGitHubSuggestions(username: string) {
    return this.http.get<any>(`https://api.github.com/search/users?q=${username}`).pipe(
      map((data: any) => {
        return data.items.map((item: any) => ({
          login: item.login,
          avatarUrl: item.avatar_url
        }));
      })
    );
  }

  selectSuggestion(suggestion: GitHubUser) {
    this.devForm.patchValue({ githubUsername: suggestion.login, avatarUrl: suggestion.avatarUrl });
    this.fetchGitHubData();
    this.suggestions = [];
  }

  fetchGitHubData() {
    this.devForm.get('githubUsername')?.enable();
    const username = this.devForm.get('githubUsername')?.value;
    if (username) {
      this.http.get(`https://api.github.com/users/${username}`).subscribe((data: any) => {
        this.devForm.patchValue({
          avatarUrl: data.avatar_url,
          name: data.name,
          email: data.email,
          location: data.location,
          htmlUrl: data.html_url
        });
      });
    }
  }

  onSubmit() {
    this.devForm.get('avatarUrl')?.enable();
    this._services.addDev(this.devForm.value).subscribe((response) => {
      if (response) {
        this.showNotification.showNotification({ icon: 'success', title: 'Successfully created!' });
        this.devForm.reset();
      }
      this.devForm.get('avatarUrl')?.disable();
    });
  }
}
