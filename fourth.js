function disguise() {
    var image = document.getElementById('giftImage');
    var hideText = document.getElementById('hide_text');

    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'inline-block'; // Show the image
        hideText.style.display = 'inline-block'; // Show the text
    } else {
        image.style.display = 'none'; // Hide the image
        hideText.style.display = 'none'; // Hide the text
    }
}