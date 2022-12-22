import addScore from './addScore.js';
import displayScore from './displayScore.js';
import getData from './getData.js';
import refreshPage from './refreshPage.js';

const ID = 'birhanu123';

const pageLayout = () => {
  const app = document.querySelector('#app');
  app.innerHTML = `
  <header id="header">
      <h1 class="header__title">Leader Board</h1>
    </header>
    <main class="container">
      <div class="recent-score">
        <div class="recent-score__header">
          <h3>Recent Scores</h3>
          <button class="btn btn-refresh" type="button">Refresh</button>
        </div>
        <div class="recent-score__list__container">
          <ul class="recent-score__lists"></ul>
        </div>
      </div>
      <div class="add-score">
        <h2 class="add-score__header">Add Your Score</h2>
        <div class="add-score__form__container">
          <form action="#" class="add-score__form">
            <label for="name" hidden>Name</label>
            <input type="text" name="name" id="name" required placeholder="Enter your name"/>
            <label for="score" hidden>Score</label>
            <input type="text" name="score" id="Score" required placeholder="Enter your Score"/>
            <button type="submit" class="btn btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  `;
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
