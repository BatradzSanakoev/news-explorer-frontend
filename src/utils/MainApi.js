/* eslint-disable import/no-anonymous-default-export */
// const BASE_URL = 'https://sb13.students.nomoreparties.xyz';

const BASE_URL = 'http://localhost:3001';

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Credentials': true,
        },
        credentials: 'include',
        body: JSON.stringify({ email, password, name })
    })
        .then((res) => {
            if (res.ok) return res.json();
            else return Promise.reject(res.statusText);
        });
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Credentials': true,
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })
        .then((res) => {
            if (res.ok) return res.json();
            else return Promise.reject(res.statusText);
        });
};

export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        credentials: 'include'
    })
        .then((res) => {
            if (res.ok) return res.json();
            else return Promise.reject(res.statusText);
        })
        .then((data) => data);
};

export const signOut = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        credentials: 'include'
    })
        .catch((err) => console.log(err));
};

export const getArticles = () => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then((res) => {
            return res.json();
        });
};

export const createArticle = (article) => {
    const { keyword, title, text, date, source, link, image } = article;
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ keyword, title, text, date, source: source.name, link, image })
    })
        .then((res) => {
            if (res.ok) return res.json();
            else return Promise.reject('Error in create');
        });
};

export const deleteArticle = (article_id) => {
    return fetch(`${BASE_URL}/articles/${article_id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then((res) => {
            if (res.ok) return res.json();
            else return Promise.reject(res.statusText);
        })
};

export default { register, authorize, getUser, signOut, getArticles, createArticle, deleteArticle };