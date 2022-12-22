const addScore = async (user, score) => {
  const ID = 'birhanu123';
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores`,
    {
      method: 'POST',
      body: JSON.stringify({ user, score }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
};

export default addScore;
