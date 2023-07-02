import React from "react";
import UserListItem from "./UserListItem";

export default function UsersListWrapper(props) {
  return (
    <div className="users__list">
      {props.users
        .sort((a, b) => a.fn.localeCompare(b.fn))
        .map((user) => (
          <UserListItem user={user} />
        ))}
    </div>
  );
}
