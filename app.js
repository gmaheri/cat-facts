window.onload = () => {
  getFacts();
}

const api = 'https://cat-fact.herokuapp.com/facts/random';

const getFacts = () => {
  fetch(api)
.then(res => {
   return res.json();
})
.then(data => {
  document.getElementById('output').innerHTML = data.text
})
.catch( error => console.log(error));
};

