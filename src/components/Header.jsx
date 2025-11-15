// components/Header.jsx
"use client";

import styled from "styled-components";
import Link from "next/link";
// Importar ícones se estiver usando react-icons
import { FaHome, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  // Simula o usuário logado para o visual
  const userName = "João"; 

  return (
    <HeaderContainer>
      <NavLinks>
        <NavLink href="/home">
          <FaHome /> Home
        </NavLink>
        <NavLink href="/busca">
          <FaSearch /> Busca
        </NavLink>
      </NavLinks>
      <UserInfo>
        <span>{userName}</span>
        {/* Placeholder de avatar */}
        <Avatar />
      </UserInfo>
    </HeaderContainer>
  );
}

// 💅 Estilos do Header
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4CAF50; /* Cor verde da barra de navegação */
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 100;
  color: white;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 25px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
`;

const Avatar = styled(FaUserCircle)`
  font-size: 30px;
  color: white;
`;