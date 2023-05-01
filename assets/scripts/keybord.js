export default function createKeyboard() {
  const keys = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'SPACE', 'Alt', '←', '↓', '→', 'Ctrl']];

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  document.querySelector('main').append(keyboard);

  for (let i = 0; i < keys.length; i += 1) {
    for (let j = 0; j < keys[i].length; j += 1) {
      const button = document.createElement('button');
      button.className = 'keys';

      button.classList.add(keys[i][j]);

      button.innerHTML = keys[i][j];

      keyboard.append(button);
    }
  }

  document.addEventListener('keypress', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      for (let j = 0; j < keys[i].length; j += 1) {
        if (e.key === keys[i][j]) {
          let key = keys[i][j];

          key = document.querySelector(`.${keys[i][j]}`);
          key.classList.add('color');
        }
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      for (let j = 0; j < keys[i].length; j += 1) {
        if (e.key === keys[i][j]) {
          let key = keys[i][j];
          key = document.querySelector(`.${keys[i][j]}`);
          key.classList.remove('color');
        }
      }
    }
  });
}
