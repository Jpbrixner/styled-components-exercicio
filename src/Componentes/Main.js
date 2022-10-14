import styled from "styled-components";
import CardVideo from "./CardVideo";
import Nav from "./Nav";

const MainContainer = styled.div`
  min-height: 80%;
  display: flex;
`;

const PainelVideos = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;

export default function Main() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem",
  };

  return (
    <MainContainer>
      <Nav />
      <PainelVideos>
        <CardVideo
          image1={card1.imagemDoVideo}
          titulo={card1.titulo}
          textoAlternativo={card1.textoAlternativo}
        />
      </PainelVideos>
    </MainContainer>
  );
}
