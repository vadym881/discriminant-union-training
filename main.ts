import { login1 } from "./approaches/approach1";
import { login2 } from "./approaches/approach2";
import { login3 } from "./approaches/approach3";
import { login4 } from "./approaches/approach4";
import { Admin, ExternalUser, Guest, User } from "./models/models2";

// Approach 1 & 2
const user1 = { username: "vadim", password: "pass123" };
const guest1 = { sessionId: "sess-456" };
const admin1 = { role: "admin", username: 'superuser', password: "adminpass" };
const externalUser1 = { oauthToken: "oauth-789" };

console.log(login1(user1));
console.log(login1(guest1));
console.log(login1(admin1));
console.log(login1(externalUser1));

console.log(login2(user1));
console.log(login2(guest1));
console.log(login2(admin1));
console.log(login2(externalUser1));

// Approach 3 & 4

const user2 = new User("vadim", "pass123");
const guest2 = new Guest("sess-456");
const admin2 = new Admin("superuser", "adminpass");
const externalUser2 = new ExternalUser("oauth-789");

console.log(login3(user2));
console.log(login3(guest2));
console.log(login3(admin2));
console.log(login3(externalUser2));

console.log(login4(user2));
console.log(login4(guest2));
console.log(login4(admin2));
console.log(login4(externalUser2));
