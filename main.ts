import { Admin } from "./unused-models/admin";
import { Moderator } from "./unused-models/moderator";
import { User } from "./user";
import { UserManager } from "./user-manager";

function handleActionRoleBased(
  actor: User,
  action: 'update' | 'block' | 'unblock' | 'delete',
  targetId: number,
  data?: { name?: string; age?: number; reason?: string }
) {
  switch (action) {
    case 'update':
      if (actor.userId === targetId) {
        const user = UserManager.findUserById(targetId);
        user?.updateProfile(data?.name, data?.age);
      } else {
        console.log('Access denied: can only update own profile.');
      }
      break;

    case 'block':
      UserManager.blockUser(actor, targetId, data?.reason || 'No reason');
      break;

    case 'unblock':
      UserManager.unblockUser(actor, targetId);
      break;

    case 'delete':
      UserManager.deleteUser(actor, targetId);
      break;
  }
}

const admin2 = UserManager.createUser('Alice', 28, 'admin');
const mod2 = UserManager.createUser('Alex', 26, 'moderator');
const user3 = UserManager.createUser('Max', 21);
const user4 = UserManager.createUser('Diana', 23);

handleActionRoleBased(admin2, 'block', user3.userId, { reason: 'Violation' });
handleActionRoleBased(mod2, 'block', user4.userId, { reason: 'Spam' });
handleActionRoleBased(user3, 'update', user3.userId, { name: 'Peter' });
handleActionRoleBased(admin2, 'delete', user4.userId);
