//api almak ve kullana kodu
//kitaplar 
const favoriteBookTitles = ["The Alchemist", "Men Are from Mars, Women Are from Venus", "The Subtle Art of Not Giving a F*ck"];

async function fetchFavoriteBooksFromGoogle() {
  const container = document.getElementById('favorite-books');
  container.innerHTML = '';

  for (const title of favoriteBookTitles) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}&langRestrict=tr`);
    const data = await response.json();
    
    const book = data.items?.[0]; 
    if (!book) continue;

    const info = book.volumeInfo;
    const thumbnail = info.imageLinks?.thumbnail || 'https://via.placeholder.com/500x750?text=No+Cover';

    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${thumbnail}" class="card-img-top" alt="${info.title}">
        <div class="card-body">
          <h5 class="card-title">${info.title}</h5>
          <p class="card-text">${info.description?.slice(0, 100) || 'Açıklama yok'}...</p>
          <a href="${info.infoLink}" target="_blank" class="btn btn-success">Detayları Gör</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  }
}

fetchFavoriteBooksFromGoogle();

//filmler
  const favoriteMovieIds = [299534, 157336, 872585,550,1124,129,496243,281338,106646]; 

    async function fetchFavoriteMovies() {
      const apiKey = 'cd7a2ac0e8686145766a53cb2041fa75'; 
      const container = document.getElementById('favorite-movies');
      container.innerHTML = '';

      for (const id of favoriteMovieIds) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=tr`);
        const movie = await response.json();

        const poster = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : 'https://via.placeholder.com/500x750?text=No+Image';

        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${poster}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.overview?.slice(0, 100) || 'Açıklama yok'}...</p>
              <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" class="btn btn-primary">Detayları Gör</a>
            </div>
          </div>
        `;
        container.appendChild(card);
      }
    }

    fetchFavoriteMovies();