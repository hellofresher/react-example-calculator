import Button from './Button';
import { operations } from '../constans';

export default function ButtonPannel({ onButtonClick }) {
  const hanndleButtonClick = (name) => {
    onButtonClick(name);
  };

  return (
    <main className="App__ButtonPannel">
      {
        operations.map((item, index) => {
          let col = 1;
          let type = 'normal';

          if (item === '0') col = 2;

          if (
            item === '+' ||
            item === '-' ||
            item === 'x' ||
            item === '÷' ||
            item === '='
          ) type = 'operation';

          return (
            <Button
              name={item}
              col={col}
              type={type}
              key={index}
              onClick={hanndleButtonClick}
            />
          );
        })
      }
      {/* <Button /> */}
    </main>
  )
}
