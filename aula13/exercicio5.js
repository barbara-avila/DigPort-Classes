// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

let movie = {
    title: 'Algum Titulo aqui',
    director: 'Algum diretor aqui',
    review: { rating: 5, comment: 'Sem comentários'}
}

console.log(movie.title, movie.director, movie.review.rating, movie.review.comment);

