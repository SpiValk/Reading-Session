function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const moveVertical = (element, distance) => {
  const currTop = extractPosition(getComputedStyle(element).top);
  element.style.top = `${currTop + distance}px`;
};

const moveHorizontal = (element, distance) => {
  const currLeft = extractPosition(getComputedStyle(element).left);
  element.style.left = `${currLeft + distance}px`;
};

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keydown', ({ key }) => {
  if (key === 'ArrowDown' || key === 'Down') {
    moveVertical(avatar, 50);
  }

  if (key === 'ArrowUp' || key === 'Up') {
    moveVertical(avatar, -50);
  }

  if (key === 'ArrowRight' || key === 'Right') {
    moveHorizontal(avatar, 50);
    avatar.style.transform = 'scale(1,1)';
  }

  if (key === 'ArrowLeft' || key === 'Left') {
    moveHorizontal(avatar, -50);
    avatar.style.transform = 'scale(-1,1)';
  }

  isTouching(avatar, coin) && moveCoin();
});

const extractPosition = (position) => parseInt(position.slice(0, -2));

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
