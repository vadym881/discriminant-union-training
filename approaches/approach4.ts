import { Admin, ExternalUser, Guest, User } from "../models/models2";

export function login4(entity: User | Guest | Admin | ExternalUser): string {
  if ((entity as User).username && (entity as User).password) {
    const user = entity as User;
    return `User ${user.username} authorized.`;
  }
  if ((entity as Guest).sessionId) {
    const guest = entity as Guest;
    return `Guest authorized with session ${guest.sessionId}.`;
  }
  if ((entity as Admin).role === "admin") {
    const admin = entity as Admin;
    return `Admin ${admin.username} authorized.`;
  }
  if ((entity as ExternalUser).oauthToken) {
    const external = entity as ExternalUser;
    return `External user authorized with token ${external.oauthToken}.`;
  }
  return "Unknown user type.";
}
