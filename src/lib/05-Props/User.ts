export class User {
  name: string;
  role: string;
  avatar?: string;

  constructor({ name = 'Anonym', role = 'Student', avatar }: { name?: string; role?: string; avatar?: string } = {}) {
    this.name = name;
    this.role = role ?? 'Student';
    this.avatar = avatar;
  }
}