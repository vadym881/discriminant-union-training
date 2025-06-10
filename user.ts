export type Role = 'guest' | 'user' | 'moderator' | 'admin';

export class User {
  static nextId = 1;
  static users: User[] = [];

  public readonly userId: number;

  constructor(
    public name: string,
    public age: number,
    public role: Role = 'user',
    public isBlocked: boolean = false,
    public blockReason?: string
  ) {
    this.userId = User.nextId++;
    User.users.push(this);
  }

  updateProfile(name?: string, age?: number) {
    if (this.isBlocked) {
      console.log(`User ${this.userId} is blocked and can't update profile.`);
      return;
    }
    if (name !== undefined) this.name = name;
    if (age !== undefined) this.age = age;
    console.log(`User ${this.userId} updated profile.`);
  }

  viewProfile() {
    return {
      userId: this.userId,
      name: this.name,
      age: this.age,
      role: this.role,
      isBlocked: this.isBlocked,
      blockReason: this.blockReason,
    };
  }
}

