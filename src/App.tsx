import { useEffect } from "react";
import * as S from "./App-styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";


const App = () => {

  const char = useCharacter('ManoLuuL');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveTop();
      break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveButton();
      break;
    }
  }

  return (
    <S.Container>
      <S.Map>
        <Character x={char.x} y={char.y} Side={char.side} name={char.name}/>
      </S.Map>
    </S.Container>
  );
}

export default App;