function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function showPage(page) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');

    document.getElementById(page).style.display = 'block';

    // Jika halaman yang dibuka adalah "media", tampilkan video
    if (page === 'media') {
        videoContainer.style.display = 'block';
        videoPlayer.play();  // Memulai video jika halaman media dipilih
    } else {
        // Jika bukan halaman media, sembunyikan video dan hentikan pemutaran
        videoContainer.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0; // Reset video ke awal
    }
}

function share(platform) {
    const url = window.location.href;
    if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
    }

    // Arahkan ke halaman "Terima Kasih" setelah berbagi
    showPage('terima-kasih');
}

// Fungsi untuk menambahkan link ke halaman Share Link
function addLink(link) {
    const linksList = document.getElementById("links-list");
    const newLink = document.createElement("div");
    newLink.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    linksList.appendChild(newLink);
}

// Misalnya menambahkan beberapa link secara otomatis
addLink("-");
addLink("-");
addLink("-");
