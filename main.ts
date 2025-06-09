type CreateUserAction = {
  type: "CREATE_USER";
  payload: { name: string; age: number };
};

type DeleteUserAction = {
  type: "DELETE_USER";
  payload: { userId: number };
};

type UpdateUserAction = {
  type: "UPDATE_USER";
  payload: { userId: number; name?: string; age?: number };
};

type BlockUserAction = {
  type: "BLOCK_USER";
  payload: { userId: number; reason: string };
};

type Action =
  | CreateUserAction
  | DeleteUserAction
  | UpdateUserAction
  | BlockUserAction;

function handleAction(action: Action): void {
  switch (action.type) {
    case "CREATE_USER":
      console.log(
        `Creating user: ${action.payload.name}, age: ${action.payload.age}`
      );
      break;
    case "DELETE_USER":
      console.log(`User with ID ${action.payload.userId} has been deleted.`);
      break;
    case "UPDATE_USER":
      const updates: string[] = [];
      if (action.payload.name !== undefined)
        updates.push(`name: ${action.payload.name}`);
      if (action.payload.age !== undefined)
        updates.push(`age: ${action.payload.age}`);
      console.log(
        `Updating user ${action.payload.userId} with: ${
          updates.length ? updates.join(", ") : "no changes"
        }`
      );
      break;
    case "BLOCK_USER":
      console.log(
        `User with ID ${action.payload.userId} has been blocked. Reason: ${action.payload.reason}`
      );
      break;
  }
}

handleAction({ type: "CREATE_USER", payload: { name: "Doofus", age: 25 } });
handleAction({ type: "DELETE_USER", payload: { userId: 3 } });
handleAction({ type: "UPDATE_USER", payload: { userId: 3, age: 26 } });
handleAction({
  type: "BLOCK_USER",
  payload: { userId: 5, reason: "Violation of rules" },
});
