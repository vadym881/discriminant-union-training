import { Admin, ExternalUser, Guest, User } from "../models/models1";

export function login1(entity: User | Guest | Admin | ExternalUser): string {
  if ("username" in entity && !("role" in entity))
    return `User ${entity.username} authorized.`;
  else if ("sessionId" in entity)
    return `Guest authorized with session ${entity.sessionId}.`;
  else if ("role" in entity && entity.role === "admin")
    return `Admin ${entity.username} authorized.`;
  else if ("oauthToken" in entity)
    return `External user authorized with token ${entity.oauthToken}.`;
  return "Unknown user type.";
}
