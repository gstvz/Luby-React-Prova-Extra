import * as S from "./styles";
import { useCars } from "@shared/hooks";
import { Button } from "@components";

export const CarDetails = () => {
  const { cars } = useCars();

  return (
    <S.Container>
      <S.Car>
        <S.CarHeader>
          <S.MakeLogo src={cars[0]?.makeLogo} />
          <S.CarInfo>
            <S.CarMakeAndModel>
              {cars[0]?.make} {cars[0]?.model}
            </S.CarMakeAndModel>
            <S.CarPrice>${cars[0]?.price}/day</S.CarPrice>
          </S.CarInfo>
        </S.CarHeader>
        <S.CarPhotoContainer>
          <Button text="Back to catalog" />
          <S.CarPhoto src={cars[0]?.colors[0].photo} />
        </S.CarPhotoContainer>
        <S.ButtonContainer>
          <Button text="Book now" forward />
        </S.ButtonContainer>
      </S.Car>
      <S.CarIdAndColor>
        <S.CarId>{cars[0]?.id}</S.CarId>
        <S.CarColor>{cars[0]?.colors[0].color}</S.CarColor>
      </S.CarIdAndColor>
    </S.Container>
  );
};