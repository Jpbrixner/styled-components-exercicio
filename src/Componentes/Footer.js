import styled from "styled-components";

const FooterStyle = styled.div`
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
`;
styled.h4`
  margin-left: 20px;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <h4>Oi! Eu moro no footer!</h4>
    </FooterStyle>
  );
}
