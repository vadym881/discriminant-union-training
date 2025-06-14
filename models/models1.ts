export type User = {
  username: string;
  password: string;
};

export type Guest = {
  sessionId: string;
};

export type Admin = {
  role: "admin";
  username: string;
  password: string;
};

export type ExternalUser = {
  oauthToken: string;
};