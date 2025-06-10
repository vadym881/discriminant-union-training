import { Role, User } from "./user";

export class UserManager {
  static createUser(name: string, age: number, role: Role = 'user'): User {
    return new User(name, age, role);
  }

  static findUserById(userId: number): User | undefined {
    return User.users.find(u => u.userId === userId);
  }

  static deleteUser(requester: User, userId: number) {
    if (requester.role !== 'admin') {
      console.log('Access denied: only admin can delete users.');
      return;
    }
    const index = User.users.findIndex(u => u.userId === userId);
    if (index === -1) {
      console.log(`User ${userId} not found.`);
      return;
    }
    const deleted = User.users.splice(index, 1)[0];
    console.log(`User ${deleted.name} with ID ${userId} deleted.`);
  }

  static blockUser(requester: User, userId: number, reason: string) {
    if (requester.role !== 'admin' && requester.role !== 'moderator') {
      console.log('Access denied: only admin or moderator can block users.');
      return;
    }
    const user = this.findUserById(userId);
    if (!user) {
      console.log(`User ${userId} not found.`);
      return;
    }
    user.isBlocked = true;
    user.blockReason = reason;
    console.log(`User ${userId} blocked. Reason: ${reason}`);
  }

  static unblockUser(requester: User, userId: number) {
    if (requester.role !== 'admin') {
      console.log('Access denied: only admin can unblock users.');
      return;
    }
    const user = this.findUserById(userId);
    if (!user || !user.isBlocked) {
      console.log(`User ${userId} not found or not blocked.`);
      return;
    }
    user.isBlocked = false;
    user.blockReason = undefined;
    console.log(`User ${userId} unblocked.`);
  }
}