export default function createMain() {
  const main = document.createElement('main');
  main.className = 'main';

  const inputArea = document.createElement('textarea');
  inputArea.className = 'input_field';
  inputArea.setAttribute('rows', '20');

  document.body.append(main);
  main.append(inputArea);


}
