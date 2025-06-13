type User = {
  username: string;
  password: string;
};

type Guest = {
  sessionId: string;
};

type Admin = {
  role: "admin";
  username: string;
  password: string;
};

type ExternalUser = {
  oauthToken: string;
};

// function login(entity: User | Guest | Admin): void {
//   if ("username" in entity && !("role" in entity))
//     console.log(`User ${entity.username} authorized.`);
//   else if ("sessionId" in entity)
//     console.log(`Guest authorized with session ${entity.sessionId}.`);
//   else if ("role" in entity && entity.role === "admin")
//     console.log(`Admin ${entity.username} authorized.`);
//   else if ("oauthToken" in entity)
//     console.log(`External user authorized with token ${entity.oauthToken}.`);
// }

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

function login(entity: User | Guest | Admin | ExternalUser): void {
  if (isUser(entity)) console.log(`User ${entity.username} authorized.`);
  else if (isGuest(entity))
    console.log(`Guest authorized with session ${entity.sessionId}.`);
  else if (isAdmin(entity)) console.log(`Admin ${entity.username} authorized.`);
  else if (isExternalUser(entity))
    console.log(`External user authorized with token ${entity.oauthToken}.`);
}
