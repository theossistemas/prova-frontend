import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  constructor(private title: Title) {}

  public set(string: string): void {
    let newTitle = `${string ? string + ` |` : undefined} `;
    this.title.setTitle(`${newTitle} TheòsDevs`);
  }

  public get(): string {
    return this.title.getTitle();
  }
}
