const movies = document.querySelectorAll('.movie');
const popup = document.getElementById('moviePopup');
const closeBtn = document.getElementById('popupClose');

movies.forEach(movie => {
    movie.addEventListener('click', function(e) {
        // Không bật popup nếu click vào nút
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

        // Lấy thông tin phim
        const title = movie.querySelector('h3').innerText;
        const genre = movie.querySelector('p').innerText.replace("Thể loại: ", "");

        // Giả lập thêm dữ liệu khác (có thể lấy từ thuộc tính hoặc JS object nếu cần)
        const duration = Math.floor(Math.random() * 40 + 90) + ' phút'; // Random từ 90-130
        const releaseDate = '15/05/2024'; // hoặc gán theo từng phim
        const rating = (Math.random() * (9.7 - 7.0) + 7.0).toFixed(1);
        const filmRolls = '🎞️'.repeat(Math.round(rating));

        // Hiển thị dữ liệu trong popup
        document.getElementById('popupTitle').innerText = title;
        document.getElementById('popupGenre').innerText = genre;
        document.getElementById('popupDuration').innerText = duration;
        document.getElementById('popupRelease').innerText = releaseDate;
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