const getData = async (id) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    method: 'GET',
  });
  const data = response.json();
  const res = await data.then((res) => res.result);
  return res;
};

export default getData;