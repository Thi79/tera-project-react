import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Loading from "../atoms/Loading";

export default function Home() {
  const navigate = useNavigate("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrenteUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(currentUser);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        onChange={(event) => {
          setCurrenteUser(event.target.value);
        }}
        className="home__select-users"
      >
        <option value=""></option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!currentUser && (
        <button
          onClick={() => navigate(`/users/${currentUser}`)}
          className="button-primary"
        >
          Entrar
        </button>
      )}
    </div>
  );
}
