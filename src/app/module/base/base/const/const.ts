import { HttpHeaders } from "@angular/common/http";

export const GITHUB_API = 'https://api.github.com/';

export const KEY_DEFAULT_USERS = 'devs';

export const CLIENT_ID = 'Iv1.5cf3ada4f6a6b083';
export const CLIENT_SECRET = '056b85d892a3c80eae96edeb580bf2c5b125010c';

export const STATES: any[] = [{ name: 'Paraná', id: 1 }, { name: 'Santa Catarina', id: 2 }];
export const CITIES: any[] = [
  { name: 'Guarapuava', id: 1, stateId: 1 },
  { name: 'Ponta Grossa', id: 2, stateId: 1 },
  { name: 'Cascavel', id: 3, stateId: 1 },
  { name: 'Maringá', id: 4, stateId: 1 },
  { name: 'Londrina', id: 5, stateId: 1 },
  { name: 'Chapecó', id: 6, stateId: 2 },
  { name: 'Balneário Camboriú', id: 7, stateId: 2 },
  { name: 'Florianópolis', id: 8, stateId: 2 },
]
