"use client";

import styled from "styled-components";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Usando react-icons para a seta (necessita instalação)

/**
 * ⚠️ NOTA: Este código assume um ambiente Next.js ou React
 * onde 'styled-components' e 'react-icons' estão instalados.
 *
 * Instalação:
 * npm install styled-components react-icons
 */

export default function LoginModal({ onClose }) {
  const [form, setForm] = useState({ 
    email: "usuario1234@gmail.com", 
    senha: "********" // Preenchido por padrão para simular o visual
  });
  const [lembrar, setLembrar] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login tentado:", form);
    // Em um ambiente real, aqui estaria a chamada à API
    // onClose(); // Comentei para que o modal permaneça aberto para a avaliação visual
  };

  return (
    <Overlay>
      <BackgroundImage /> {/* Fundo simulando a grade de filmes */}
      <ModalBox>
        <BackArrow onClick={onClose} aria-label="Voltar">
          <FaArrowLeft />
        </BackArrow>
        <Title>Entrar</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email-input">Email</Label>
          <Input
            id="email-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          
          <Label htmlFor="senha-input">Senha</Label>
          <Input
            id="senha-input"
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            required
          />

          <RememberMeContainer>
            <input 
              type="checkbox" 
              id="lembrar-me" 
              checked={lembrar} 
              onChange={() => setLembrar(!lembrar)} 
            />
            <label htmlFor="lembrar-me">Lembre-se de mim</label>
          </RememberMeContainer>

          <Button type="submit">Entrar</Button>
        </Form>
      </ModalBox>
    </Overlay>
  );
}

// --------------------------------------------------------------------------------
// 💅 ESTILOS (Ajustados para o Visual da Imagem)
// --------------------------------------------------------------------------------

// Simulação do Fundo de Filmes (MacBook Pro 16" - 1)
const BackgroundImage = styled.div`
  position: fixed;
  inset: 0;
  /* Esta URL deve ser substituída pela imagem real do fundo de grade de filmes */
  background-image: url('https://via.placeholder.com/1920x1080/1a1a1a/FFFFFF?text=FUNDO+DE+FILMES');
  background-size: cover;
  background-position: center;
  opacity: 0.1; /* Escurece o fundo para dar o "mood" */
  z-index: 199; /* Abaixo do modal */
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  /* Cor de fundo sutil para sobrepor a imagem, focando no modal */
  background: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalBox = styled.div`
  background: rgba(0, 0, 0, 0.9); /* Fundo bem escuro e quase opaco para o formulário */
  padding: 30px 40px;
  border-radius: 4px; /* Cantos levemente arredondados */
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 201; /* Fica acima do fundo */
`;

const BackArrow = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  margin-top: 50px; /* Espaço para a seta */
  text-align: center;
  color: #fff;
  font-size: 26px;
  font-weight: normal;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  color: #ccc;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  background-color: #444; /* Fundo do input cinza-escuro, como na imagem */
  color: #fff;
  /* Remove a borda de foco padrão para um look mais "limpo" */
  &:focus {
    outline: 2px solid #4CAF50;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #ccc;
  font-size: 14px;

  input[type="checkbox"] {
    margin-right: 10px;
    /* Ajuste visual para o checkbox */
    accent-color: #4CAF50; 
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  /* Cor verde do botão da imagem */
  background-color: #4CAF50; 
  color: white;
  font-weight: bold;
  border: none;
  padding: 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  transition: background 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;