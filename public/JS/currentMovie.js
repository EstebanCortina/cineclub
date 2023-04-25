const titulo = document.getElementById('titulo');
const fill = new Promise((resolve, reject) => {
  fetch('/movie')
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      console.error(error);
      reject(error);
    });
});
fill.then(response => {
  titulo.innerHTML = response[response.length - 1].original_title;
});
