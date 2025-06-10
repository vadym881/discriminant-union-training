import { User } from "../user";

export class Guest extends User {
  constructor(name: string) {
    super(name, 0);
  }

  viewPublicContent(): void {
    console.log(`Guest ${this.name} is viewing public content.`);
  }
}
