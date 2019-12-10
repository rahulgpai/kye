import React, { Fragment } from "react";

const Card = ({ users }) => {
  console.log(users);
  return (
    <Fragment>
      {users
        ? users.map(user => {
            const imageUrl = "https://i.pravatar.cc/150?img=" + user.id;
            return (
              <li className="solo-card" key={user.id}>
                <img src={imageUrl} alt={user.name} />
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.website}</div>
              </li>
            );
          })
        : null}
    </Fragment>
  );
};

export default Card;
