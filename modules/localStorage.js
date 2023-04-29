const check = (async () => {
  if (!localStorage.getItem('movie')) {
    try {
      let response = await fetch('/movie');
      let data = await response.json();
      console.log("Fetch!");
      localStorage.setItem('movie', JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem('movie')));
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("No fetch");
  }
})();