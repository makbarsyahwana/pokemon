import Image from "next/image";
import { StyledPokeCard } from "./style/StyledPokeCard";
import { StyledPokeImage } from "./style/StyledPokeImage";


export default function PokeCard({
  id,
  image,
  nickname,
  isMyPokemonListPage,
  name,
}) {
  return (
    <StyledPokeCard>
      <div className="card">
        <PokeImage
          image={image}
          width="150px"
          height="150px"
          altImg={nickname}
        />
        <span className="name">          
            <div>
                <div>{name}</div>
            </div>
        </span>
        {
            nickname && (
                <span className="nickname">          
                    <div>
                        <div>{nickname}</div>
                    </div>
                </span>
            )
        }
      </div>
    </StyledPokeCard>
  );
}


function PokeImage({ image, width, height, altImg }) {
  return (
    <StyledPokeImage>
        <div className="frame">
            <Image src={image} width={width} height={height} alt={altImg} />
        </div>
    </StyledPokeImage>
  );
}