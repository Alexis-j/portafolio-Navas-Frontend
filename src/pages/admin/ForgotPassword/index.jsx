import React, { useState } from "react";

import api from "../../../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/admin/request-reset", { email });
      setMessage(res.data.message || "Correo enviado ✅");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Error al enviar correo");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
      <h2>Recuperar contraseña</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />


        <button type="submit">Enviar correo</button>
      </form>
    </div>
  );
}
