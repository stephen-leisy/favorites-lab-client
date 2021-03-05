import request from 'superagent';
const URL = 'https://damp-ocean-63759.herokuapp.com'
export async function signUpUser(email, password) {
    const response = await request.post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body.token;
}
export async function signInUser(email, password) {
    const response = await request.post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body.token;
}
export async function getMovies(search) {
    const movies = await request.get(`${URL}/movies?search=${search}`);
    return movies.body.results;
}
export async function getMovieById(id) {
    const movie = await request.get(`${URL}/movies/id?search=${id}`);
    return movie.body;
}

export async function addFavorite(movie, token) {
    const response = await request.post(`${URL}/api/favorites`).set('Authorization', token).send(movie);
    return response.body;
}
export async function getFavorite(token) {
    const response = await request.get(`${URL}/api/favorites`).set('Authorization', token);
    return response.body;
}
