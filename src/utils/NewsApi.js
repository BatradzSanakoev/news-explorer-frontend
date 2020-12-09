/* eslint-disable import/no-anonymous-default-export */
const week = 24 * 7 * 60 * 60 * 1000;
const toDate = new Date().toISOString();
const fromDate = (new Date(new Date() - week)).toISOString();

const NEWS_API_OPTIONS = {
    newsApiUrl: 'https://nomoreparties.co/news/v2/everything',
    apiKey: 'a00562c29a074120bf4cc649e201d1d3',
    from: fromDate.slice(0, 10),
    to: toDate.slice(0, 10),
    pageSize: 100
};

const sendRequest = (request) => {
    return fetch(`${NEWS_API_OPTIONS.newsApiUrl}?q=${request}&from=${NEWS_API_OPTIONS.from}&to=${NEWS_API_OPTIONS.to}$sortBy=popularity&apiKey=${NEWS_API_OPTIONS.apiKey}&pageSize=${NEWS_API_OPTIONS.pageSize}`)
        .then((res) => {
            if (res.ok) return res.json();
            else return Promise.reject(res.statusText);
        });
    // .catch((err) => console.log(err));
};

export default { sendRequest };