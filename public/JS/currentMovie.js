

const titulo = document.getElementById('titulo');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const btnEN = document.getElementById('btnEN');
const btnMX = document.getElementById('btnMX');
const btnES = document.getElementById('btnES');
let poster = null;

if (!localStorage.getItem('movie')) {
  fetch('/movie')
    .then(response => response.json())
    .then(data => {
      console.log("Fetch!");
      localStorage.setItem('movie', JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem('movie')));
    })
    .catch(error => {
      console.error(error);
    });
} else {
  console.log("No fetch");
}





/*
poster = data.poster_path;
uno.setAttribute('src', `https://image.tmdb.org/t/p/w500/${poster}`);
*/

/*
fill.then(response => {
  uno.setAttribute('src', `https://image.tmdb.org/t/p/w500/${response[2][2].file_path}`);
  dos.setAttribute('src', `https://image.tmdb.org/t/p/w500/${response[2][0].file_path}`);
  tres.setAttribute('src', `https://image.tmdb.org/t/p/w500/${response[2][1].file_path}`);
});

//https://image.tmdb.org/t/p/w500/mnVZLdo9C4X80sJmgcGNpMNCbgk.jpg


fill.then(response => {
  titulo.innerHTML = response[response.length - 1].original_title;
});


btnEN.addEventListener('click', () => {
  fill.then(response => {
    titulo.innerHTML = response[response.length - 1].original_title;
  });
});
btnES.addEventListener('click', () => {
  fill.then(response => {
    titulo.innerHTML = response[0].title;
  });
});
btnMX.addEventListener('click', () => {
  fill.then(response => {
    titulo.innerHTML = response[1].title;
  });
});
*/