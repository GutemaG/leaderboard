import addScore from './addScore.js';
import displayScore from './displayScore.js';
import getData from './getData.js';
import refreshPage from './refreshPage.js';

const ID = 'birhanu123';

const pageLayout = () => {
  const data = getData(ID);
  data.then((resp) => displayScore(resp));

  const form = document.querySelector('.add-score__form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = form.name.value;
    const score = form.score.value;
    addScore(user, score);
    form.name.value = '';
    form.score.value = '';
  });

  const refreshBtn = document.querySelector('.btn-refresh');
  refreshBtn.addEventListener('click', () => {
    refreshPage();
  });
};

export default pageLayout;
