import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Loading from "../atoms/Loading";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate("");
  const { currentUser, setCurrenteUser } = useContext(CurrentUserContext);
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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
    <div className={`${styles.home} center`}>
      <div className={styles.logo}>
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        onChange={(event) => {
          setCurrenteUser(event.target.value);
        }}
        className={styles.selectUsers}
      >
        <option value="">Selecione um usuário</option>
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
