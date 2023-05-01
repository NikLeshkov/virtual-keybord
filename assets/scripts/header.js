export default function createHeader() {
  const header = document.createElement('header');

  const title = document.createElement('div');
  title.className = 'title_content';

  const pTitle = document.createElement('p');
  pTitle.className = 'title';
  pTitle.innerHTML = 'Виртуальная клавиатура window';

  document.body.append(header);
  header.append(title);
  title.append(pTitle);
}
