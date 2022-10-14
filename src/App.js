import React from "react";
import styled from "styled-components";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";

import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
`;
const TelaInteira = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <GlobalStyled />
      <TelaInteira>
        <Header />
        <Main />
        <Footer />
      </TelaInteira>
    </div>
  );
}
