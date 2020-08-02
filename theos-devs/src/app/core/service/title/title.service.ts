import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  constructor(private title: Title) {}

  public set(value: string): void {
    const newTitle = `${value ? value + ` |` : undefined} `;
    this.title.setTitle(`${newTitle} TheòsDevs`);
  }

  public get(): string {
    return this.title.getTitle();
  }
}
