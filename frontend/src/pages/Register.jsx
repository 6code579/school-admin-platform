import React, { useState } from "react";
import { register } from "../services/Auth";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password1, password2);
      alert("Inscription réussie !");
    } catch (err) {
      alert("Erreur d'inscription : " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmer le mot de passe"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export { RegisterPage as Register };