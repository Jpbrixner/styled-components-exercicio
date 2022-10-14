import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <h1>LabeTube</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </HeaderStyle>
  );
}
