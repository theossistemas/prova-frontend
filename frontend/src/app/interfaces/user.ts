export interface User {
  _id?: string,
  name: string,
  email: string,
  password: string,
  city: string,
  academic: string,
  stacks: string,
  avatar?: string,
  github_url?: string,
  role: number,
}