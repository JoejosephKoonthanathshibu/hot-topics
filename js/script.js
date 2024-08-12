const container = document.getElementById('content');
const links = document.querySelectorAll('nav ul li a');
let url = 'partials/home.html';
const loadContent = (urlFeed) => {
    fetch(urlFeed)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            container.innerHTML = data; // 
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
};
loadContent(url);
const selectContent = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    loadContent(href);
};
links.forEach(link => {
    link.addEventListener('click', selectContent);
});