const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const container = document.querySelector('#boxes');

for (let color of colors) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = color;
  container.appendChild(box);

  box.addEventListener('click', ({ target }) => {
    const header = document.querySelector('h1');
    header.style.color = target.style.backgroundColor;
  });
}
