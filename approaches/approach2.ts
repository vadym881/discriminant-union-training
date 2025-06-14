import { Admin, ExternalUser, Guest, User } from "../models/models1";

function isUser(entity: any): entity is User {
  return "username" in entity && "password" in entity && !("role" in entity);
}

function isGuest(entity: any): entity is Guest {
  return "sessionId" in entity;
}

function isAdmin(entity: any): entity is Admin {
  return "role" in entity && entity.role === "admin";
}

function isExternalUser(entity: any): entity is ExternalUser {
  return "oauthToken" in entity;
}

export function login2(entity: User | Guest | Admin | ExternalUser): string {
  if (isUser(entity)) console.log(`User ${entity.username} authorized.`);
  else if (isGuest(entity))
    return `Guest authorized with session ${entity.sessionId}.`;
  else if (isAdmin(entity)) return `Admin ${entity.username} authorized.`;
  else if (isExternalUser(entity))
    return `External user authorized with token ${entity.oauthToken}.`;
  return "Unknown user type.";
}
