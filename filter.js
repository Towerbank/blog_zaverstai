let articles = document.querySelectorAll('.articles__category');
let filter = document.querySelector('.articles__select');

filter.onchange = function () {
    for (let article of articles) {
        if (article.dataset.category !== filter.value && filter.value !== 'all') {
            article.classList.add('hidden');
        } else {
            article.classList.remove('hidden');
        }
    }
};