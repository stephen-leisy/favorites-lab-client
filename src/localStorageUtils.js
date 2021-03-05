const TOKEN = 'TOKEN';

export function getTokenFromLocalStorage() {
    const userToken = localStorage.getItem(TOKEN);

    if (userToken) return JSON.parse(userToken);

    return {

        token: ''
    }
}

export function putTokenInLocalStorage(token) {
    localStorage.setItem(TOKEN, JSON.stringify(token))
}