const city = "Mumbai";
const apiKey = "5fca141baf1740edb3d185929241409";
async function fetchData() {
  let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

fetchData();
