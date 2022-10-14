import styled from "styled-components";

const NavStyle = styled.div`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;
const Button = styled.li`
  list-style-type: none;
`;

export default function Nav() {
  return (
    <NavStyle>
      <ul>
        <Button>Início</Button>
        <Button>Em alta</Button>
        <Button>Inscrições</Button>
        <hr />
        <Button>Originais</Button>
        <Button>Histórico</Button>
      </ul>
    </NavStyle>
  );
}
