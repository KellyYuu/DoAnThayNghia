const movies = document.querySelectorAll('.movie');
const popup = document.getElementById('moviePopup');
const closeBtn = document.getElementById('popupClose');

movies.forEach(movie => {
    movie.addEventListener('click', function(e) {
        
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

        const title = movie.querySelector('h3').innerText;
        const genre = movie.querySelector('p').innerText.replace("Thể loại: ", "");

        const rating = (Math.random() * (9.7 - 7.0) + 7.0).toFixed(1);
        const filmRolls = '🎞️'.repeat(Math.round(rating));

        document.getElementById('popupTitle').innerText = title;
        document.getElementById('popupGenre').innerText = genre;
        document.getElementById('popupRating').innerText = `${rating}/10 ${filmRolls}`;

        popup.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});