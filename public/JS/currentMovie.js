const titulo = document.getElementById('titulo');
const carousel = document.getElementById('carousel');
const carouselInner = document.getElementById('carouselInner');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const btnEN = document.getElementById('btnEN');
const btnMX = document.getElementById('btnMX');
const btnES = document.getElementById('btnES');
let poster = null;

const check = (async () => {
  if (!localStorage.getItem('movie')) {
    try {
      let response = await fetch('/movie');
      let data = await response.json();
      console.log("Fetch!");
      localStorage.setItem('movie', JSON.stringify(data));


      let movie = JSON.parse(localStorage.getItem('movie'));
      for (let i = 0; i < movie.extra_posters.length; i++) {

        carouselInner.innerHTML =
          `
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://image.tmdb.org/t/p/w500/${movie.extra_posters[i].file_path}" class="d-block w-100" alt="">
      </div>
        `


      }

    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("localStorage");
    let movie = JSON.parse(localStorage.getItem('movie'));
    //console.log(movie.extra_posters[0].file_path);
    carouselInner.innerHTML +=
      `
      <div class="carousel-item active">
        <img src="https://image.tmdb.org/t/p/w500/${movie.extra_posters[0].file_path}" class="d-block w-100 h-100" alt="">
      </div>
        `
    for (let i = 1; i < movie.extra_posters.length; i++) {

      carouselInner.innerHTML +=
        `
      <div class="carousel-item">
        <img src="https://image.tmdb.org/t/p/w500/${movie.extra_posters[i].file_path}" class="d-block w-100 h-100" alt="">
      </div>
        `


    }
  }
})();





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