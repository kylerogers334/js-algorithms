function link(url, text) {
    return `<a href="${url}">${text}</a>`;
}

const url = 'https://www.google.com';
const google = 'Google!';

console.log(link(url, google));
