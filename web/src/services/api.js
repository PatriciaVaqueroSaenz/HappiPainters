const sendDataToApi = (data) => {
  const url = "/card/";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
export default sendDataToApi;
