import getData from './getData.js';
import displayScore from './displayScore.js';

const refreshPage = () => {
  const ID = 'birhanu123';
  const result = getData(ID);
  result.then((resp) => displayScore(resp));
};

export default refreshPage;
