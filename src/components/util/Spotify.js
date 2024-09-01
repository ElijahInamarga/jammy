const CLIENT_ID = '964bfd13ba484db480e2450b92c6365a';
const REDIRECT_URI = 'http://localhost:3000';

let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expireTime = window.location.href.match(/expires_in=([^&]*)/);

        if(tokenInURL && expireTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expireTime);
        

        window.setTimeout(() =>( accessToken = ''), expiresIn * 1000);
        window.history.pushState('Access token', null, '/');
        return accessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
        window.location = redirect;
    },

    search(term) {
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `bearer ${accessToken}`}
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if(!jsonResponse) {
                console.log('Response error');
            }
            return jsonResponse.tracks.items.map(element => ({
                id: element.id,
                name: element.name,
                artist: element.artise[0].name,
                album: element.album.name,
                uri: element.uri
            }));
        })

    }
};

export { Spotify };