import { Admin, ExternalUser, Guest, User } from "../models/models2";

export function login3(entity: User | Guest | Admin | ExternalUser): string {
  if (entity instanceof User) {
    return `User ${entity.username} authorized.`;
  }
  if (entity instanceof Guest) {
    return `Guest authorized with session ${entity.sessionId}.`;
  }
  if (entity instanceof Admin) {
    return `Admin ${entity.username} authorized.`;
  }
  if (entity instanceof ExternalUser) {
    return `External user authorized with token ${entity.oauthToken}.`;
  }
  return "Unknown user type.";
}
