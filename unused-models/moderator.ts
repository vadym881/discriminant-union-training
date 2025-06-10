import { User } from "../user";

export class Moderator extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  blockUser(userId: number, reason: string) {
    const user = User.users.find(u => u.userId === userId);
    if (user) {
      user.isBlocked = true;
      user.blockReason = reason;
      console.log(`Moderator blocked user ${userId}. Reason: ${reason}`);
    } else {
      console.log(`User with ID ${userId} not found.`);
    }
  }
}

