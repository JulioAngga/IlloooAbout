function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        mainContent.style.marginRight = '250px';
    } else {
        mainContent.style.marginRight = '0';
    }
}

function showPage(page) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

function showSegment(segmentId) {
    const segments = document.querySelectorAll('.segmen');
    segments.forEach(segment => segment.style.display = 'none');
    document.getElementById(segmentId).style.display = 'block';
}

function share(platform) {
    let url;
    const currentUrl = window.location.href; // Get the current page URL

    switch (platform) {
        case 'whatsapp':
            url = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
            break;
        default:
            alert('Platform not supported');
            return;
    }

    // Open the sharing URL in a new tab/window
    window.open(url, '_blank');

    // Redirect to the "Terima Kasih" section after sharing
    showPage('terima-kasih');
}
