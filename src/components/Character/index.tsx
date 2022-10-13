import { FC } from "react";
import { Props } from "./interface";
import * as S from "./styles";

export const Character: FC<Props> = ({ x, y, Side, name }) => {

    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90,
    }

    return (
        <S.Container
            Left={x * size}
            Top={y * size}
            Size={size}
            sidePosition={sides[Side] ?? 0}
        >
            <S.NameBox>{name}</S.NameBox>
        </S.Container>
    );
}