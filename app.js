window.addEventListener('load', () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listWrapper = document.querySelector('.list-wrapper');
  populateDOM(listWrapper, cards);

  document.getElementById('shuffle-button').onclick = () => {
    shuffle(cards);
    populateDOM(listWrapper, cards);
  };

  document.getElementById('sort-button').onclick = () => {
    cards.sort((a, b) => a - b);
    populateDOM(listWrapper, cards);
  };
});

const populateDOM = (listWrapper, cards) => {
  listWrapper.innerHTML = cards.map(number => `<div class="card card-${number}">${number}</div>`).join('');
};

const shuffle = (cards) => {
  for(let i = (cards.length - 1); i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[x]] = [cards[x], cards[i]];
  }
};
