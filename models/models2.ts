export class User {
  constructor(public username: string, public password: string) {}
}

export class Guest {
  constructor(public sessionId: string) {}
}

export class Admin {
  role = "admin" as const;
  constructor(public username: string, public password: string) {}
}

export class ExternalUser {
  constructor(public oauthToken: string) {}
}