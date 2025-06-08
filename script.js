const shareButton = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu');
const shareTriangle = document.getElementById('share-triangle');

shareButton.addEventListener('click', function() {
    if (shareMenu.classList.contains('hidden')) {
      shareMenu.classList.remove('hidden');
      shareTriangle.classList.remove('hidden');
    } else {
      shareMenu.classList.add('hidden');
      shareTriangle.classList.add('hidden');
    }
});