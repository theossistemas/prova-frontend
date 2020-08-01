import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key) || undefined;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }

  public key(index: number): string {
    return localStorage.key(index);
  }
}
