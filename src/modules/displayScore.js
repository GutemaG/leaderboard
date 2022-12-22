const displayScore = (data) => {
  const scoreList = document.querySelector('.recent-score__lists');
  scoreList.innerHTML = '';
  data.forEach((player) => {
    const listElement = document.createElement('li');
    listElement.classList.add('recent-score__list');

    listElement.innerHTML = `
        <span class="recent-score__list__name">${player.user}</span>
        <span class="recent-score__list__score">${player.score}</span>
    `;
    scoreList.appendChild(listElement);
  });
};

export default displayScore;