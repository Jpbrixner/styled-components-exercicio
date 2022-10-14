import styled from "styled-components";

const BoxPrincipal = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
`;
const BoxImg = styled.img`
  width: 100%;
  height: 200px;
`;

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPrincipal onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </BoxPrincipal>
  );
}

export default CardVideo;
