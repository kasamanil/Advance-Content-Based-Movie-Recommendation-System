// Sample movies data
const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, poster: "https://..." },
  { title: "Avengers: Endgame", year: 2019, genre: "Action", rating: 8.4, poster: "https://..." },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, poster: "https://..." },
  // more movies...
];

// Display movies
function displayMovies(movieArray) {
  const list = document.getElementById("movieList");
  list.innerHTML = "";

  movieArray.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.genre} | ${movie.year}</p>
      <p>⭐ ${movie.rating}</p>
    `;
    list.appendChild(card);
  });
}

// Search by name
function searchMovie() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const results = movies.filter(m => m.title.toLowerCase().includes(query));
  displayMovies(results);
}

// Initialize
displayMovies(movies);
