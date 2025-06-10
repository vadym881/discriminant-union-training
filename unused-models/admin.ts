import { User } from "../user";

export class Admin extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  deleteUser(userId: number) {
    const index = User.users.findIndex(u => u.userId === userId);
    if (index === -1) {
      console.log(`User with ID ${userId} not found.`);
      return;
    }
    const deleted = User.users.splice(index, 1)[0];
    console.log(`Admin deleted user ${deleted.name} with ID ${userId}.`);
  }

  blockUser(userId: number, reason: string) {
    const user = User.users.find(u => u.userId === userId);
    if (user) {
      user.isBlocked = true;
      user.blockReason = reason;
      console.log(`Admin blocked user ${userId}. Reason: ${reason}`);
    } else {
      console.log(`User with ID ${userId} not found.`);
    }
  }

  unblockUser(userId: number) {
    const user = User.users.find(u => u.userId === userId);
    if (user && user.isBlocked) {
      user.isBlocked = false;
      user.blockReason = undefined;
      console.log(`Admin unblocked user ${userId}.`);
    } else {
      console.log(`User with ID ${userId} not found or not blocked.`);
    }
  }
}

