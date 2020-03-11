const api = 'http://localhost:3002/api/react-component/';

export const ApiService = {
    get(endpoint) {
        return fetch(`${api}${endpoint}`)
        .then(res => res.json());
    }
}

//  npm i -g @treinaweb/tw-dev-server
// tw-dev-server
// https://treinaweb.github.io/tw-dev-server/
// POST /api/react-cursos/category body: { "name": "Javascript" }